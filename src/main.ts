import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); //  Enables DTO validation

  app.enableCors({
    origin: 'http://localhost:4200', // Angular dev server
    credentials: true,
  });

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Service Booking API')
    .setDescription('API documentation for car service booking system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); //  This sets up /api

  await app.listen(3000);
}
bootstrap();
