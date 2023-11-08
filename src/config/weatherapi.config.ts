import { registerAs } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';

export default registerAs(ConfigEnum.WEATHERAPI, () => ({
  apiKey: process.env.WEATHERAPI_APIKEY,
}));
