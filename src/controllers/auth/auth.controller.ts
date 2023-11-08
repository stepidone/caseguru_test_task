import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto, AuthResponseDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signUp(@Body() payload: SignUpDto): Promise<AuthResponseDto> {
    return this.authService.signUp(payload);
  }

  @Post('login')
  signIn(@Body() payload: SignInDto): Promise<AuthResponseDto> {
    return this.authService.signIn(payload);
  }
}
