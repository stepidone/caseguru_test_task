import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

const passwordErrorText =
  'Must have more than 6 characters and include one of this symbols [.,!_]';

const loginPropertyOptions = {
  required: true,
  type: 'string',
  description: 'Unique username',
};

const passwordPropertyOptions = {
  required: true,
  type: 'string',
  description: passwordErrorText,
};

const fioPropertyOptions = {
  required: true,
  type: 'string',
  description: 'Full name',
};

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty(loginPropertyOptions)
  login: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[.,!_])[A-Za-z\d.,!_]{6,}$/, { message: passwordErrorText })
  @ApiProperty(passwordPropertyOptions)
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty(fioPropertyOptions)
  fio: string;
}

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty(loginPropertyOptions)
  login: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[.,!_])[A-Za-z\d.,!_]{6,}$/, { message: passwordErrorText })
  @ApiProperty(passwordPropertyOptions)
  password: string;
}

export const apiTokenPropertyConfig = {
  required: true,
  type: 'string',
  description: '',
};

export class AuthResponseDto {
  fio: string;
  apiToken: string;
}
