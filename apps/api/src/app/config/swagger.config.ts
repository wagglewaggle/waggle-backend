import { DocumentBuilder } from '@nestjs/swagger';
import { config } from './config.service';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Waggle Waggle API')
  .setDescription('Waggle Waggle API 문서')
  .setVersion(config.apiDocVersion)
  .build();
