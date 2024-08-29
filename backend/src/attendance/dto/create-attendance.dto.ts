import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class CreateAttendanceDto {
  @IsInt()
  @IsNotEmpty()
  pegawaiId: number;

  @IsDate()
  @IsNotEmpty()
  tanggal: Date;

  @IsString()
  @IsNotEmpty()
  jamMasuk: string;

  @IsString()
  @IsNotEmpty()
  jamKeluar: string;
}
