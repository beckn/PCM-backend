import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  const config = new DocumentBuilder()
.setTitle('PCM API')
.setDescription('APIs on PCM')
.setVersion('1.0')
.addTag('PCM')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document,{
  swaggerOptions: {
    tagsSorter: 'alpha',
    operationsSorter: 'alpha',
  }
},);
  await app.listen(3000);
}
bootstrap();
