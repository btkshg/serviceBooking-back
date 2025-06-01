import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // to validate incorrect inputs we use globalPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // The properties that are not in the DTO wont be validated
      forbidNonWhitelisted: true, // for an error throwing
      transform: true, // transorm to dto
    }),
  );

  app.enableCors({
    origin: 'http://localhost:4200', // Angular dev server
    credentials: true,
  });

  // Classic swagger config setup
  const config = new DocumentBuilder()
    .setTitle('Service Booking API')
    .setDescription('API documentation for car service booking system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // for setting up /api

  await app.listen(3000);
}
bootstrap();
