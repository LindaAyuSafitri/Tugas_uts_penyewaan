import { Module } from '@nestjs/common';
import { KendaraanService } from './kendaraan.service';
import { KendaraanResolver } from './kendaraan.resolver';

@Module({
  providers: [KendaraanResolver, KendaraanService],
})
export class KendaraanModule {}
