import { Role } from '@prisma/client';
import { IsString, IsNumber, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsNumber()
  pegawaiId: number;
}
