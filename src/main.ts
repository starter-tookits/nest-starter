import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';
import { AppModule } from '@/app.module';

async function bootstrap(): Promise<void> {
  // API_PORT will be injected when build docker image but not from dotenv
  const port = process.env.API_PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.use(compression());
  await app.listen(port);
}

bootstrap().then();
