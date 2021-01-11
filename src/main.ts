import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';

config();
const { PORT } = process.env;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(`${PORT}`);
  Logger.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap')
}
bootstrap();
