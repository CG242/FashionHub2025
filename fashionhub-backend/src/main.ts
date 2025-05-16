import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Optionnel si tu as un frontend

   // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('FashionHub API')
    .setDescription("Documentation de l'API FashionHub")
    .setVersion('1.0')
    .addTag('Users') // Pour regrouper les routes
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Accessible sur /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
