import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { describe, expect, it } from 'vitest';
import { UpdatePenyewaanInput } from './update-penyewaan.input';

describe('UpdatePenyewaanInput', () => {
  it('menerima ID positif tanpa mewajibkan field lain', async () => {
    const input = plainToInstance(UpdatePenyewaanInput, { id: 3 });

    await expect(validate(input)).resolves.toHaveLength(0);
  });

  it('menolak ID yang bukan bilangan bulat positif', async () => {
    const input = plainToInstance(UpdatePenyewaanInput, { id: 0 });

    const errors = await validate(input);

    expect(errors.map(({ property }) => property)).toContain('id');
  });
});
