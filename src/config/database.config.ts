import { registerAs } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';
import * as UrlParse from 'url-parse';

export default registerAs(ConfigEnum.DATABASE, () => {
  const url = process.env.DATABASE_URL;
  const parsed = UrlParse(url);
  return {
    type: parsed.protocol.slice(0, -1),
    username: parsed.username,
    password: parsed.password,
    host: parsed.hostname,
    port: parseInt(parsed.port),
    database: parsed.pathname.slice(1),
  };
});
