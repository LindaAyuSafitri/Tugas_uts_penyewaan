import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePelangganInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nama: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  no_telp: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  alamat: string;
}
