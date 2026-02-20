import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { AppModule } from '../src/app.module';
import { swaggerConfig } from '../src/app/config/swagger.config';

async function generateDocs(fileName: string) {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  fs.writeFileSync(fileName, JSON.stringify(document, null, 2));

  console.log(`✅ Swagger JSON file generated: ${fileName}`);

  await app.close();
}

generateDocs('docs.json')
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
