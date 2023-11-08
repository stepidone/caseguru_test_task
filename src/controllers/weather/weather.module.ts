import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ConfigModule } from '@nestjs/config';
import { UserEntityModule } from 'src/database/entities/user/user.module';
import { ActionEntityModule } from 'src/database/entities/actions/action.module';

@Module({
  imports: [ConfigModule, UserEntityModule, ActionEntityModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
