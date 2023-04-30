import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('Watch-party-api')
    .setDescription('The Watch Party API Nest Js')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // forbidNonWhitelisted: true,
      skipMissingProperties: true,
      transform: true,
    }),
  );

  app.listen(process.env.PORT || 3002);

  console.log(`Server is running ✔ ${process.env.PORT || 3002}`);
}
bootstrap();
