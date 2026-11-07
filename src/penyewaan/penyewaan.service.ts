import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePenyewaanInput } from './dto/create-penyewaan.input';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';
import { UpdatePenyewaanInput } from './dto/update-penyewaan.input';
import { PrismaService } from '../prisma.service';

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

@Injectable()
export class PenyewaanService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPenyewaanInput: CreatePenyewaanInput) {
    return this.saveRental(createPenyewaanInput);
  }

  findAll() {
    return this.prisma.penyewaan.findMany({
      include: { pelanggan: true, kendaraan: true },
    });
  }

  async findOne(id: number) {
    const penyewaan = await this.prisma.penyewaan.findUnique({
      where: { id },
      include: { pelanggan: true, kendaraan: true },
    });
    if (!penyewaan) {
      throw new NotFoundException(
        `Penyewaan dengan ID ${id} tidak ditemukan.`,
      );
    }
    return penyewaan;
  }

  async createFromRest(input: CreatePenyewaanDto) {
    if (!Number.isInteger(input.total_biaya)) {
      throw new BadRequestException('total_biaya harus berupa bilangan bulat.');
    }

    const tanggalSewa = new Date(input.tanggal_sewa);
    const tanggalKembali = input.tanggal_kembali
      ? new Date(input.tanggal_kembali)
      : new Date(tanggalSewa.getTime() + MILLISECONDS_PER_DAY);

    if (tanggalKembali <= tanggalSewa) {
      throw new BadRequestException(
        'Tanggal kembali harus lebih dari tanggal sewa.',
      );
    }

    const [pelanggan, kendaraan] = await Promise.all([
      this.prisma.pelanggan.findUnique({ where: { id: input.pelangganId } }),
      this.prisma.kendaraan.findUnique({ where: { id: input.kendaraanId } }),
    ]);
    if (!pelanggan) {
      throw new NotFoundException(
        `Pelanggan dengan ID ${input.pelangganId} tidak ditemukan.`,
      );
    }
    if (!kendaraan) {
      throw new NotFoundException(
        `Kendaraan dengan ID ${input.kendaraanId} tidak ditemukan.`,
      );
    }

    return this.prisma.penyewaan.create({
      data: {
        pelangganId: input.pelangganId,
        kendaraanId: input.kendaraanId,
        total_biaya: input.total_biaya,
        tanggal_sewa: tanggalSewa,
        tanggal_kembali: tanggalKembali,
      },
      include: { pelanggan: true, kendaraan: true },
    });
  }

  update(id: number, updatePenyewaanInput: UpdatePenyewaanInput) {
    return this.saveRental(updatePenyewaanInput, id);
  }

  remove(id: number) {
    return this.prisma.penyewaan.delete({ where: { id } });
  }

  private async saveRental(
    input: CreatePenyewaanInput | UpdatePenyewaanInput,
    id?: number,
  ) {
    const existing = id === undefined ? undefined : await this.findOne(id);
    const tanggalSewa = input.tanggal_sewa ?? existing?.tanggal_sewa;
    const tanggalKembali = input.tanggal_kembali ?? existing?.tanggal_kembali;
    const kendaraanId = input.kendaraanId ?? existing?.kendaraanId;
    const pelangganId = input.pelangganId ?? existing?.pelangganId;

    if (!tanggalSewa || !tanggalKembali || !kendaraanId || !pelangganId) {
      throw new BadRequestException('Data penyewaan belum lengkap.');
    }

    const durasi = Math.ceil(
      (tanggalKembali.getTime() - tanggalSewa.getTime()) /
        MILLISECONDS_PER_DAY,
    );
    if (durasi < 1) {
      throw new BadRequestException(
        'Tanggal kembali harus lebih dari tanggal sewa.',
      );
    }

    const [pelanggan, kendaraan] = await Promise.all([
      this.prisma.pelanggan.findUnique({ where: { id: pelangganId } }),
      this.prisma.kendaraan.findUnique({ where: { id: kendaraanId } }),
    ]);
    if (!pelanggan) {
      throw new NotFoundException(
        `Pelanggan dengan ID ${pelangganId} tidak ditemukan.`,
      );
    }
    if (!kendaraan) {
      throw new NotFoundException(
        `Kendaraan dengan ID ${kendaraanId} tidak ditemukan.`,
      );
    }

    const data = {
      pelangganId,
      kendaraanId,
      tanggal_sewa: tanggalSewa,
      tanggal_kembali: tanggalKembali,
      total_biaya: durasi * kendaraan.harga_sewa_per_hari,
    };
    const include = { pelanggan: true, kendaraan: true } as const;

    return id === undefined
      ? this.prisma.penyewaan.create({ data, include })
      : this.prisma.penyewaan.update({ where: { id }, data, include });
  }
}
