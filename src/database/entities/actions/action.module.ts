import { Module } from '@nestjs/common';
import actionProvider from './action.providers';
import { ActionEntityService } from './action.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [actionProvider, ActionEntityService],
  exports: [ActionEntityService],
})
export class ActionEntityModule {}
