import { IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  nama: string;

  @IsString()
  alamat: string;

  @IsString()
  email: string;

  @IsString()
  telp: string;

  @IsString()
  jabatan: string;
}
