import { DataSource } from 'typeorm';
import { Provider } from '@nestjs/common';
import { ProviderEnum } from 'src/common/provider.enum';
import { ActionEntity } from './action.entity';

export default <Provider>{
  provide: ProviderEnum.ENTITY_ACTION,
  inject: [ProviderEnum.TYPEORM_DATASOURCE],
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ActionEntity),
};
