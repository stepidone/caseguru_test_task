import { Injectable, Inject } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { ProviderEnum } from 'src/common/provider.enum';
import { ActionEntity } from './action.entity';
import { CreateActionDto } from './action.dto';

@Injectable()
export class ActionEntityService {
  constructor(
    @Inject(ProviderEnum.ENTITY_ACTION)
    private walletRepository: Repository<ActionEntity>,
  ) {}

  public async create(
    data: CreateActionDto,
    queryRunner?: QueryRunner,
  ): Promise<ActionEntity> {
    if (queryRunner) return queryRunner.manager.save(ActionEntity, data);
    return this.walletRepository.save(data);
  }
}
