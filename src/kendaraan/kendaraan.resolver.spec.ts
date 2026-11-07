import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { KendaraanResolver } from './kendaraan.resolver';
import { KendaraanService } from './kendaraan.service';

describe('KendaraanResolver', () => {
  let resolver: KendaraanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KendaraanResolver,
        { provide: KendaraanService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<KendaraanResolver>(KendaraanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
