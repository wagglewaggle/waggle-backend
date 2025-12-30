import { Module } from '@nestjs/common';
import { WorkerModule } from './worker/worker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@waggle/redis';
import { MysqlConfigService } from './app/mysql/mysql-config.service';
import { config } from './app/config/config.service';

const TypeOrmRootModule = TypeOrmModule.forRootAsync({ useClass: MysqlConfigService });
const RedisRootModule = RedisModule.register({ host: config.redisHost, port: config.redisPort });

@Module({
  imports: [TypeOrmRootModule, RedisRootModule, WorkerModule],
})
export class AppModule {}
