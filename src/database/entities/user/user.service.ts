import { Injectable, Inject } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProviderEnum } from 'src/common/provider.enum';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserEntityService {
  constructor(
    @Inject(ProviderEnum.ENTITY_USER)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async getByToken(apiToken: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ apiToken });
  }

  public async getByLogin(login: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ login });
  }

  public async create(
    data: CreateUserDto,
    queryRunner?: QueryRunner,
  ): Promise<UserEntity> {
    if (queryRunner) return queryRunner.manager.save(UserEntity, data);
    return this.userRepository.save(data);
  }
}
