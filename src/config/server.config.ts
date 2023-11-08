import { registerAs } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';

export default registerAs(ConfigEnum.SERVER, () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.SERVER_PORT) || 3000,
}));
