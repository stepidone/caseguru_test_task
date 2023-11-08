import { registerAs } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';

export default registerAs(ConfigEnum.DATABASE, () => {
  return {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
  };
});
