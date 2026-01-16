import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { RedisModule, RedisService } from '@waggle/redis';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from '../app/mysql/mysql-config.service';
import { config } from '../app/config/config.service';
import { Place, PlaceStatus } from '@waggle/entity';
import { LoggerModule, LoggerService } from '@waggle/logger';

const REDIS_STREAM_KEY = 'place:population:queue';

const TypeOrmRootModule = TypeOrmModule.forRootAsync({ useClass: MysqlConfigService });
const RedisRootModule = RedisModule.forRoot({ host: config.redisHost, port: config.redisPort });
const LoggerRootModule = LoggerModule.forRoot({
  labelName: `${config.projectName}-producer`,
  printConsole: config.useConsoleLogger,
  rotateOption: {
    zippedArchive: true,
  },
});

@Module({
  imports: [TypeOrmRootModule, RedisRootModule, LoggerRootModule],
})
class PlacePopulationModule {}

async function placePopulationProduce() {
  const app = await NestFactory.createApplicationContext(PlacePopulationModule);
  const logger = app.get<LoggerService>(LoggerService);

  try {
    const dataSource = app.get(DataSource);
    const redisService = app.get(RedisService);

    const places = await dataSource.getRepository(Place).find({
      select: ['idx', 'name'],
      where: {
        status: PlaceStatus.Activated,
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

    logger.log(`✅ Place Producer Done. Total ${places.length}.`);
  } catch (e) {
    logger.error('❌ Place Producer Error', e);
    process.exit(1);
  } finally {
    await app.close();
  }
}

placePopulationProduce();
