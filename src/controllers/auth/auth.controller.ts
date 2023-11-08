import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JoiValidationPipe } from 'src/utils/requestFilter/validation.pipe';
import * as Schemas from './auth.schemas';
import { SignInDto, SignUpDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signUp(
    @Body(new JoiValidationPipe(Schemas.signUpSchema)) payload: SignUpDto,
  ) {
    return this.authService.signUp(payload);
  }

  @Post('login')
  signIn(
    @Body(new JoiValidationPipe(Schemas.signInSchema)) payload: SignInDto,
  ) {
    return this.authService.signIn(payload);
  }
}
