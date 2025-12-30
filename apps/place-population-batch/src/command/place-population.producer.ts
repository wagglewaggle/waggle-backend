import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { KtPlace, KtPlaceStatus } from '@waggle/entity';
import { RedisModule, RedisService } from '@waggle/redis';
import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from '../app/mysql/mysql-config.service';
import { config } from '../app/config/config.service';

const REDIS_STREAM_KEY = 'place:population:queue';

const TypeOrmRootModule = TypeOrmModule.forRootAsync({ useClass: MysqlConfigService });
const RedisRootModule = RedisModule.register({ host: config.redisHost, port: config.redisPort });

@Module({
  imports: [TypeOrmRootModule, RedisRootModule],
})
class PlacePopulationModule {}

async function placePopulationProduce() {
  const app = await NestFactory.createApplicationContext(PlacePopulationModule, {
    logger: ['error', 'warn', 'log'],
  });
  const logger = new Logger('PlaceProducer');

  try {
    const dataSource = app.get(DataSource);
    const redisService = app.get(RedisService);

    const places = await dataSource.getRepository(KtPlace).find({
      select: ['idx', 'name'],
      where: {
        status: KtPlaceStatus.Activated,
      },
    });

    if (places.length === 0) {
      logger.warn('No places found.');
      return;
    }

    const pipeline = redisService.client.pipeline();

    for (const place of places) {
      pipeline.xadd(REDIS_STREAM_KEY, '*', 'placeIdx', place.idx, 'name', place.name);
    }

    await pipeline.exec();

    logger.log(`✅ Place Producer Done. Total ${places.length}. `);
  } catch (e) {
    logger.error('❌ Place Producer Error', e);
    process.exit(1);
  } finally {
    await app.close();
  }
}

placePopulationProduce();
