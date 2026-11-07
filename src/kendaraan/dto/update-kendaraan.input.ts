import { CreateKendaraanInput } from './create-kendaraan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdateKendaraanInput extends PartialType(CreateKendaraanInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
