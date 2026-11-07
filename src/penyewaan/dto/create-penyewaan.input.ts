import { InputType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, IsInt, Min } from 'class-validator';

@InputType()
export class CreatePenyewaanInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  pelangganId: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  kendaraanId: number;

  @Field(() => GraphQLISODateTime)
  @Type(() => Date)
  @IsDate()
  tanggal_sewa: Date;

  @Field(() => GraphQLISODateTime)
  @Type(() => Date)
  @IsDate()
  tanggal_kembali: Date;
}
