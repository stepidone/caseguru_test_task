import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'Actions' })
export class ActionEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Index('UserWallets_userId_fkey')
  @Column({
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @CreateDateColumn()
  actionTime: Date;

  @Column({
    type: 'integer',
    nullable: false,
  })
  requestResult: number;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  tempC: number;

  @ManyToOne(() => UserEntity, (user) => user.actions)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
