import { Module } from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';
import { PenyewaanResolver } from './penyewaan.resolver';
import { PenyewaanController } from './penyewaan.controller';

@Module({
  controllers: [PenyewaanController],
  providers: [PenyewaanResolver, PenyewaanService],
})
export class PenyewaanModule {}
