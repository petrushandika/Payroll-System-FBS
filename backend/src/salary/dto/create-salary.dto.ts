import { IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateSalaryDto {
  @IsInt()
  @IsPositive()
  pegawaiId: number;

  @IsNumber()
  gajiPokok: number;

  @IsNumber()
  tunjangan: number;

  @IsNumber()
  potongan: number;

  @IsNumber()
  totalGaji: number;
}
