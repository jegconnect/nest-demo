import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Use Heroku's PORT or default to 3000 locally
  await app.listen(port);
}
bootstrap();