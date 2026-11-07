import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('Variabel DATABASE_URL belum diatur.');
    }

    const connection = new URL(connectionString);
    if (connection.protocol !== 'mysql:') {
      throw new Error('DATABASE_URL harus menggunakan protokol mysql://.');
    }

    super({
      adapter: new PrismaMariaDb({
        host: connection.hostname,
        port: Number(connection.port || 3306),
        user: decodeURIComponent(connection.username),
        password: decodeURIComponent(connection.password),
        database: decodeURIComponent(connection.pathname.slice(1)),
        connectionLimit: 5,
      }),
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}