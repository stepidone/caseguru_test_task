import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import serverConfig from './config/server.config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { WeatherModule } from './controllers/weather/weather.module';
import { AuthModule } from './controllers/auth/auth.module';
import { CryptoService } from './utils/crypto/crypto.service';
import weatherapiConfig from './config/weatherapi.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig, databaseConfig, weatherapiConfig],
      cache: true,
    }),
    DatabaseModule,

    AuthModule,
    WeatherModule,
  ],
  controllers: [],
  providers: [CryptoService],
})
export class AppModule {}
