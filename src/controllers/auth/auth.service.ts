import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto, SignUpDto } from './auth.dto';
import { UserEntityService } from 'src/database/entities/user/user.service';
import { CryptoService } from 'src/utils/crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private userEntityService: UserEntityService,
    private cryptoService: CryptoService,
  ) {}

  async signUp(data: SignUpDto) {
    const { login, password, fio } = data;
    const user = await this.userEntityService.getByLogin(login);
    if (user) throw new ForbiddenException('Login is already taken');

    const hashedPassword = this.cryptoService.hashPassword(password);
    const apiToken = this.cryptoService.generateUUID();

    await this.userEntityService.create({
      login,
      password: hashedPassword,
      fio,
      apiToken,
    });

    return {
      fio,
      apiToken,
    };
  }

  async signIn(data: SignInDto) {
    const { login, password } = data;
    const user = await this.userEntityService.getByLogin(login);
    if (!user) throw new NotFoundException('User not found');
    const isPasswordValid = this.cryptoService.comparePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');
    return {
      fio: user.fio,
      apiToken: user.apiToken,
    };
  }
}
