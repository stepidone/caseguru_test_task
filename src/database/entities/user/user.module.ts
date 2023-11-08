import { Module } from '@nestjs/common';
import userProvider from './user.providers';
import { UserEntityService as UserEntityService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [userProvider, UserEntityService],
  exports: [UserEntityService],
})
export class UserEntityModule {}
