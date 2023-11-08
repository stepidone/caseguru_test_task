import * as uuid from 'uuid';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  constructor() {}

  public hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public comparePassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }

  public generateUUID(): string {
    return uuid.v4();
  }

  public generateString(
    length = 10,
    symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  ): string {
    let value = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * symbols.length);
      value += symbols.substring(randIndex, randIndex + 1);
    }
    return value;
  }
}
