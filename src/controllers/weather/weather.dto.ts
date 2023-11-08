import { ApiProperty } from '@nestjs/swagger';
import {
  Equals,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { apiTokenPropertyConfig } from '../auth/auth.dto';

export class GetCurrentWeatherDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty(apiTokenPropertyConfig)
  apiToken: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    description: 'Name of the city',
  })
  city: string;

  @IsOptional()
  @Equals('ru')
  @ApiProperty({
    required: false,
    enum: ['ru'],
    description: 'Response language',
  })
  language?: 'ru';
}

export class CurrentWeatherDto {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}
