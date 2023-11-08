import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './common/config.enum';
import { ResponseInterceptor } from './utils/responeFilter/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const serverConfig = configService.get(ConfigEnum.SERVER);
  await app.listen(serverConfig.port);
}
bootstrap();
