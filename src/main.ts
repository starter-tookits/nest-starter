import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  // API_PORT will be injected when build docker image but not from dotenv
  const port = process.env.API_PORT || 5000;
  const app = await NestFactory.create(AppModule);

  await app.listen(port);
}

bootstrap().then();
