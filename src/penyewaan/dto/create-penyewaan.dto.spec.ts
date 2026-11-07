import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { describe, expect, it } from 'vitest';
import { CreatePenyewaanDto } from './create-penyewaan.dto';

describe('CreatePenyewaanDto', () => {
  it('menerima data valid dengan tanggal ISO dan biaya nonnegatif', async () => {
    const dto = plainToInstance(CreatePenyewaanDto, {
      pelangganId: 1,
      kendaraanId: 2,
      total_biaya: 0,
      tanggal_sewa: '2026-01-01T00:00:00.000Z',
    });

    await expect(validate(dto)).resolves.toHaveLength(0);
  });

  it('menolak tanggal non-ISO dan total biaya negatif', async () => {
    const dto = plainToInstance(CreatePenyewaanDto, {
      pelangganId: 1,
      kendaraanId: 2,
      total_biaya: -1,
      tanggal_sewa: 'bukan-tanggal',
    });

    const errors = await validate(dto);

    expect(errors.map(({ property }) => property)).toEqual(
      expect.arrayContaining(['total_biaya', 'tanggal_sewa']),
    );
  });

  it('menerima biaya berupa angka desimal nonnegatif sesuai validasi DTO', async () => {
    const dto = plainToInstance(CreatePenyewaanDto, {
      pelangganId: 1,
      kendaraanId: 2,
      total_biaya: 10.5,
      tanggal_sewa: '2026-01-01T00:00:00.000Z',
    });

    await expect(validate(dto)).resolves.toHaveLength(0);
  });

  it('menolak angka yang dikirim sebagai teks', async () => {
    const dto = plainToInstance(CreatePenyewaanDto, {
      pelangganId: '1',
      kendaraanId: '2',
      total_biaya: '100010',
      tanggal_sewa: '2026-01-01T00:00:00.000Z',
    });

    const errors = await validate(dto);

    expect(errors.map(({ property }) => property)).toEqual(
      expect.arrayContaining(['pelangganId', 'kendaraanId', 'total_biaya']),
    );
  });
});
