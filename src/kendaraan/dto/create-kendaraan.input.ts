import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

@InputType()
export class CreateKendaraanInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nama_kendaraan: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  jenis: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  plat_nomor: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  harga_sewa_per_hari: number;
}
