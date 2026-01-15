import { DynamicModule, Global, Module } from '@nestjs/common';
import { LoggerConfig } from './logger.interface';
import { LoggerService } from './logger.service';
import { LOGGER_CONFIG_TOKEN } from './logger.constant';

@Global()
@Module({})
export class LoggerModule {
  static register(config: LoggerConfig): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_CONFIG_TOKEN,
          useValue: config,
        },
        LoggerService,
      ],
      exports: [LoggerService],
    };
  }
}
