import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ActionEntity } from '../actions/action.entity';

@Entity({ name: 'Users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  login: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  password: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  fio: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  apiToken: string;

  @CreateDateColumn()
  registeredAt: Date;

  @OneToMany(() => ActionEntity, (action) => action.user)
  actions: ActionEntity[];
}
