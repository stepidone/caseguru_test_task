import { Module } from '@nestjs/common';
import { UserEntityModule } from 'src/database/entities/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CryptoModule } from 'src/utils/crypto/crypto.module';

@Module({
  imports: [UserEntityModule, CryptoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
