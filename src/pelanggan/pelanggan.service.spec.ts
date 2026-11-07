import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { PelangganService } from './pelanggan.service';
import { PrismaService } from '../prisma.service';

describe('PelangganService', () => {
  let service: PelangganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PelangganService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<PelangganService>(PelangganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
