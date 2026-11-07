import { CreatePenyewaanInput } from './create-penyewaan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdatePenyewaanInput extends PartialType(CreatePenyewaanInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
