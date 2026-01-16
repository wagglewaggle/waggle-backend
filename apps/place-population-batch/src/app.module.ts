import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer/consumer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@waggle/redis';
import { MysqlConfigService } from './app/mysql/mysql-config.service';
import { config } from './app/config/config.service';
import { LoggerModule } from '@waggle/logger';

const TypeOrmRootModule = TypeOrmModule.forRootAsync({ useClass: MysqlConfigService });
const RedisRootModule = RedisModule.forRoot({ host: config.redisHost, port: config.redisPort });
const LoggerRootModule = LoggerModule.forRoot({
  labelName: config.projectName,
  printConsole: config.useConsoleLogger,
  rotateOption: {
    zippedArchive: true,
  },
});

@Module({
  imports: [TypeOrmRootModule, RedisRootModule, LoggerRootModule, ConsumerModule],
})
export class AppModule {}
