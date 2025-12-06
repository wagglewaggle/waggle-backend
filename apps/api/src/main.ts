import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './app/config/config.service';
import helmet from 'helmet';
import { initOpenTelemetry } from './tracing';

async function bootstrap() {
  const openTelemetryLogger = new Logger('OpenTelemetry');
  const openTelemetrySDK = initOpenTelemetry(openTelemetryLogger);

  const app = await NestFactory.create(AppModule);

  // NestJS 앱 종료 시 OpenTelemetry SDK도 함께 종료되도록 설정
  app.enableShutdownHooks();
  app
    .getHttpAdapter()
    .getInstance()
    .on('close', () => {
      openTelemetrySDK
        .shutdown()
        .then(() => openTelemetryLogger.log('OpenTelemetry SDK shut down on app close.'))
        .catch((err) => openTelemetryLogger.error('Error shutting down OpenTelemetry SDK on app close.', err));
    });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.use(helmet());
  app.enableCors();

  await app.listen(config.apiPort, config.apiHost);
}
bootstrap();
