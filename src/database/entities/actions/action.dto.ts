import { ActionEntity } from './action.entity';

export type CreateActionDto = Pick<ActionEntity, 'userId' | 'requestResult'> &
  Partial<Pick<ActionEntity, 'tempC'>>;
