import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { AppModule } from './modules/main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3008);
}
bootstrap();
