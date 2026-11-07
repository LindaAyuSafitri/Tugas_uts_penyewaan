import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Penyewaan } from '../../penyewaan/entities/penyewaan.entity';

@ObjectType()
export class Kendaraan {
  @Field(() => Int)
  id: number;

  @Field()
  nama_kendaraan: string;

  @Field()
  jenis: string;

  @Field()
  plat_nomor: string;

  @Field(() => Int)
  harga_sewa_per_hari: number;

  @Field(() => [Penyewaan], { nullable: true })
  penyewaan: Penyewaan[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
