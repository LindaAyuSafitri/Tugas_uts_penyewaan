import {
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CreatePenyewaanDto {
  @IsInt()
  @Min(1)
  pelangganId: number;

  @IsInt()
  @Min(1)
  kendaraanId: number;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(0)
  total_biaya: number;

  @IsDateString()
  tanggal_sewa: string;

  @IsOptional()
  @IsDateString()
  tanggal_kembali?: string;
}
