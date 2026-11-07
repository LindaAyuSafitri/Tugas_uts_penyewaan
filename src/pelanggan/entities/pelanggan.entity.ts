import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Penyewaan } from '../../penyewaan/entities/penyewaan.entity';

@ObjectType()
export class Pelanggan {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field()
  email: string;

  @Field()
  no_telp: string;

  @Field()
  alamat: string;

  @Field(() => [Penyewaan], { nullable: true })
  penyewaan: Penyewaan[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
