import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { KendaraanModule } from './kendaraan/kendaraan.module';
import { PelangganModule } from './pelanggan/pelanggan.module';
import { PenyewaanModule } from './penyewaan/penyewaan.module';
import { PrismaModule } from './prisma.module';

const DAFTAR_PENYEWAAN_QUERY = `query DaftarPenyewaan {
  penyewaan {
    tanggal_sewa
    total_biaya
    pelanggan {
      nama
    }
    kendaraan {
      merk: nama_kendaraan
    }
  }
}`;

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      graphiql: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: {
            runTelemetry: false,
            endpointIsEditable: true,
          },
          document: DAFTAR_PENYEWAAN_QUERY,
        }),
      ],
    }),
    PrismaModule,
    PelangganModule,
    KendaraanModule,
    PenyewaanModule,
  ],
})
export class AppModule {}
