import { DataSource } from 'typeorm';
import { Provider } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { ProviderEnum } from 'src/common/provider.enum';

export default <Provider>{
  provide: ProviderEnum.ENTITY_USER,
  inject: [ProviderEnum.TYPEORM_DATASOURCE],
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
};
