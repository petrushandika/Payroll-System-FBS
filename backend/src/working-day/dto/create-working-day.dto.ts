import { IsString } from 'class-validator';

export class CreateWorkingDayDto {
  @IsString()
  hari: string;

  @IsString()
  jamMasuk: string;

  @IsString()
  jamKeluar: string;
}
