import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { PelangganResolver } from './pelanggan.resolver';
import { PelangganService } from './pelanggan.service';

describe('PelangganResolver', () => {
  let resolver: PelangganResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PelangganResolver,
        { provide: PelangganService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<PelangganResolver>(PelangganResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
