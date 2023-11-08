import { UserEntity } from './user.entity';

export type CreateUserDto = Pick<
  UserEntity,
  'login' | 'fio' | 'password' | 'apiToken'
>;
