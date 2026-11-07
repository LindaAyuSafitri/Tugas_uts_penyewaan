import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Kendaraan } from '../../kendaraan/entities/kendaraan.entity';
import { Pelanggan } from '../../pelanggan/entities/pelanggan.entity';

@ObjectType()
export class Penyewaan {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  pelangganId: number;

  @Field(() => Int)
  kendaraanId: number;

  @Field(() => GraphQLISODateTime)
  tanggal_sewa: Date;

  @Field(() => GraphQLISODateTime)
  tanggal_kembali: Date;

  @Field(() => Int)
  total_biaya: number;

  @Field(() => Pelanggan)
  pelanggan: Pelanggan;

  @Field(() => Kendaraan)
  kendaraan: Kendaraan;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
