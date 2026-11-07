import { CreatePelangganInput } from './create-pelanggan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdatePelangganInput extends PartialType(CreatePelangganInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
