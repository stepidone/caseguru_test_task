import { Body, Controller, Post } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CurrentWeatherDto, GetCurrentWeatherDto } from './weather.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post('current')
  signUp(@Body() payload: GetCurrentWeatherDto): Promise<CurrentWeatherDto> {
    return this.weatherService.getCurrentByToken(payload);
  }
}
