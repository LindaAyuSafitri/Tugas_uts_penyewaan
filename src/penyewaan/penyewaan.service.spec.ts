import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PenyewaanService } from './penyewaan.service';
import { PrismaService } from '../prisma.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

const prisma = {
  pelanggan: { findUnique: vi.fn() },
  kendaraan: { findUnique: vi.fn() },
  penyewaan: {
    findUniqueOrThrow: vi.fn(),
    findMany: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
};

describe('PenyewaanService', () => {
  let service: PenyewaanService;

  beforeEach(async () => {
    vi.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PenyewaanService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<PenyewaanService>(PenyewaanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('menghitung biaya berdasarkan lama sewa dan tarif kendaraan', async () => {
    prisma.pelanggan.findUnique.mockResolvedValue({ id: 1 });
    prisma.kendaraan.findUnique.mockResolvedValue({
      id: 2,
      harga_sewa_per_hari: 100000,
    });
    prisma.penyewaan.create.mockResolvedValue({
      id: 3,
      total_biaya: 300000,
    });
    const tanggalSewa = new Date('2026-01-01T00:00:00.000Z');
    const tanggalKembali = new Date('2026-01-04T00:00:00.000Z');

    const result = await service.create({
      pelangganId: 1,
      kendaraanId: 2,
      tanggal_sewa: tanggalSewa,
      tanggal_kembali: tanggalKembali,
    });

    expect(result.total_biaya).toBe(300000);
    expect(prisma.penyewaan.create).toHaveBeenCalledWith({
      data: {
        pelangganId: 1,
        kendaraanId: 2,
        tanggal_sewa: tanggalSewa,
        tanggal_kembali: tanggalKembali,
        total_biaya: 300000,
      },
      include: { pelanggan: true, kendaraan: true },
    });
  });

  it('menolak tanggal kembali yang tidak setelah tanggal sewa', async () => {
    const tanggal = new Date('2026-01-01T00:00:00.000Z');

    await expect(
      service.create({
        pelangganId: 1,
        kendaraanId: 2,
        tanggal_sewa: tanggal,
        tanggal_kembali: tanggal,
      }),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.kendaraan.findUnique).not.toHaveBeenCalled();
  });

  it('membuat penyewaan REST beserta relasi pelanggan dan kendaraan', async () => {
    prisma.pelanggan.findUnique.mockResolvedValue({ id: 1 });
    prisma.kendaraan.findUnique.mockResolvedValue({ id: 2 });
    prisma.penyewaan.create.mockResolvedValue({ id: 3 });
    const input: CreatePenyewaanDto = {
      pelangganId: 1,
      kendaraanId: 2,
      total_biaya: 250000,
      tanggal_sewa: '2026-01-01T00:00:00.000Z',
    };

    await service.createFromRest(input);

    expect(prisma.penyewaan.create).toHaveBeenCalledWith({
      data: {
        pelangganId: 1,
        kendaraanId: 2,
        total_biaya: 250000,
        tanggal_sewa: new Date(input.tanggal_sewa),
        tanggal_kembali: new Date('2026-01-02T00:00:00.000Z'),
      },
      include: { pelanggan: true, kendaraan: true },
    });
  });

  it('menolak biaya desimal karena kolom Prisma memakai tipe Int', async () => {
    await expect(
      service.createFromRest({
        pelangganId: 1,
        kendaraanId: 2,
        total_biaya: 10.5,
        tanggal_sewa: '2026-01-01T00:00:00.000Z',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.pelanggan.findUnique).not.toHaveBeenCalled();
  });
});
