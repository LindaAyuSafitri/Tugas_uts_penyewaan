import { Injectable } from '@nestjs/common';
import { CreatePelangganInput } from './dto/create-pelanggan.input';
import { UpdatePelangganInput } from './dto/update-pelanggan.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PelangganService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPelangganInput: CreatePelangganInput) {
    return this.prisma.pelanggan.create({
      data: createPelangganInput,
    });
  }

  findAll() {
    return this.prisma.pelanggan.findMany({
      include: {
        penyewaan: { include: { pelanggan: true, kendaraan: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pelanggan.findUniqueOrThrow({
      where: { id },
      include: {
        penyewaan: { include: { pelanggan: true, kendaraan: true } },
      },
    });
  }

  update(id: number, updatePelangganInput: UpdatePelangganInput) {
    const { id: _id, ...data } = updatePelangganInput;
    return this.prisma.pelanggan.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.pelanggan.delete({
      where: { id },
    });
  }
}