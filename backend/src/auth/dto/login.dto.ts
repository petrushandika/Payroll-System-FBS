import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
