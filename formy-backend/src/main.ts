import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import discord from './resources/discord';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(3333);
  await discord();
}
bootstrap();
