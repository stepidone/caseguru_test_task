import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CurrentWeatherDto, GetCurrentWeatherDto } from './weather.dto';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';
import axios from 'axios';
import { UserEntityService } from 'src/database/entities/user/user.service';
import { ActionEntityService } from 'src/database/entities/actions/action.service';

@Injectable()
export class WeatherService {
  private baseUrl = 'http://api.weatherapi.com/v1';

  private apiKey: string;

  constructor(
    private configService: ConfigService,
    private userEntityService: UserEntityService,
    private actionEntityService: ActionEntityService,
  ) {
    const { apiKey } = this.configService.get(ConfigEnum.WEATHERAPI);
    this.apiKey = apiKey;
  }

  private async getCurrent(city: string, language?: string) {
    const url = `${this.baseUrl}/current.json`;
    return axios.get<CurrentWeatherDto>(url, {
      params: {
        key: this.apiKey,
        q: city,
        lang: language,
      },
    });
  }

  public async getCurrentByToken(
    data: GetCurrentWeatherDto,
  ): Promise<CurrentWeatherDto> {
    const { apiToken, city, language } = data;

    const user = await this.userEntityService.getByToken(apiToken);
    if (!user) throw new ForbiddenException('Invalid API token');

    try {
      const weather = await this.getCurrent(city, language);
      await this.actionEntityService.create({
        userId: user.id,
        requestResult: weather.status,
        tempC: weather.data.current.temp_c,
      });

      return weather.data;
    } catch (error) {
      await this.actionEntityService.create({
        userId: user.id,
        requestResult: error.response?.status || 500,
      });

      throw new HttpException(error.message, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}
