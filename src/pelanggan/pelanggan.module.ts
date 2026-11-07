import { Module } from '@nestjs/common';
import { PelangganService } from './pelanggan.service';
import { PelangganResolver } from './pelanggan.resolver';

@Module({
  providers: [PelangganResolver, PelangganService],
})
export class PelangganModule {}
