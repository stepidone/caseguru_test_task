import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/common/config.enum';
import { ProviderEnum } from 'src/common/provider.enum';
import { DataSource } from 'typeorm';

export default <Provider>{
  provide: ProviderEnum.TYPEORM_DATASOURCE,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const options = configService.get(ConfigEnum.DATABASE);
    const dataSource = new DataSource({
      type: 'postgres',
      ...options,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
