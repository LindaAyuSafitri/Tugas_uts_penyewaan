import { Injectable } from '@nestjs/common';
import { CreateKendaraanInput } from './dto/create-kendaraan.input';
import { UpdateKendaraanInput } from './dto/update-kendaraan.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class KendaraanService {
  constructor(private readonly prisma: PrismaService) {}

  create(createKendaraanInput: CreateKendaraanInput) {
    return this.prisma.kendaraan.create({ data: createKendaraanInput });
  }

  findAll() {
    return this.prisma.kendaraan.findMany({
      include: {
        penyewaan: { include: { pelanggan: true, kendaraan: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.kendaraan.findUniqueOrThrow({
      where: { id },
      include: {
        penyewaan: { include: { pelanggan: true, kendaraan: true } },
      },
    });
  }

  update(id: number, updateKendaraanInput: UpdateKendaraanInput) {
    const { id: _id, ...data } = updateKendaraanInput;
    return this.prisma.kendaraan.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.kendaraan.delete({ where: { id } });
  }
}
