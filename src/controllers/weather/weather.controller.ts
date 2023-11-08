import { Body, Controller, Post } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { JoiValidationPipe } from 'src/utils/requestFilter/validation.pipe';
import { GetCurrentWeatherDto } from './weather.dto';
import * as Schemas from './weather.schemas';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post('current')
  signUp(
    @Body(new JoiValidationPipe(Schemas.getCurrentWeatherSchema))
    payload: GetCurrentWeatherDto,
  ) {
    return this.weatherService.getCurrentByToken(payload);
  }
}
