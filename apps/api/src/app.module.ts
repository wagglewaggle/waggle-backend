import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestMiddleware } from './app/middlewares/request.middleware';
import { MysqlConfigService } from './app/mysql/mysql-config.service';
import { ProvinceModule } from './province/province.module';
import { HealthModule } from './health/health.module';
import { LocationModule } from './location/location.module';
import { CategoryModule } from './category/category.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './app/interceptors/logging.interceptor';
import { AllExceptionFilter } from './app/filters/all-exception.filter';
import { CategoryTypeModule } from './category-type/category-type.module';
import { PlaceModule } from './place/place.module';
import { LoggerModule } from '@waggle/logger';
import { config } from './app/config/config.service';

const TypeOrmRootModule = TypeOrmModule.forRootAsync({
  useClass: MysqlConfigService,
});
const LoggerRootModule = LoggerModule.forRoot({
  labelName: config.projectName,
  printConsole: config.useConsoleLogger,
  rotateOption: {
    zippedArchive: true,
  },
});

@Module({
  imports: [TypeOrmRootModule, LoggerRootModule, ProvinceModule, HealthModule, LocationModule, CategoryModule, CategoryTypeModule, PlaceModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestMiddleware).forRoutes('*');
  }
}
