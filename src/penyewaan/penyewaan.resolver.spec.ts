import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { PenyewaanResolver } from './penyewaan.resolver';
import { PenyewaanService } from './penyewaan.service';

describe('PenyewaanResolver', () => {
  let resolver: PenyewaanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PenyewaanResolver,
        { provide: PenyewaanService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<PenyewaanResolver>(PenyewaanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
