import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { KendaraanService } from './kendaraan.service';
import { PrismaService } from '../prisma.service';

describe('KendaraanService', () => {
  let service: KendaraanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KendaraanService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<KendaraanService>(KendaraanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
