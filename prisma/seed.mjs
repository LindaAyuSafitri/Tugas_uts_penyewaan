import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('Variabel DATABASE_URL belum diatur.');
}

const connection = new URL(connectionString);
if (connection.protocol !== 'mysql:') {
  throw new Error('DATABASE_URL harus menggunakan protokol mysql://.');
}

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: connection.hostname,
    port: Number(connection.port || 3306),
    user: decodeURIComponent(connection.username),
    password: decodeURIComponent(connection.password),
    database: decodeURIComponent(connection.pathname.slice(1)),
    connectionLimit: 5,
  }),
});

try {
  const pelanggan = await prisma.pelanggan.upsert({
    where: { email: 'praktik.010@rental.test' },
    update: {
      nama: 'Linda010',
      no_telp: '081234567890',
      alamat: 'Alamat010',
    },
    create: {
      nama: 'Linda010',
      email: 'praktik.010@rental.test',
      no_telp: '081234567890',
      alamat: 'Alamat010',
    },
  });

  const kendaraan = await prisma.kendaraan.upsert({
    where: { plat_nomor: 'B 010 UTS' },
    update: {
      nama_kendaraan: 'Mobil010',
      jenis: 'Mobil010',
      harga_sewa_per_hari: 50005,
    },
    create: {
      nama_kendaraan: 'Mobil010',
      jenis: 'Mobil010',
      plat_nomor: 'B 010 UTS',
      harga_sewa_per_hari: 50005,
    },
  });

  const tanggalSewa = new Date('2026-11-06T00:00:00.000Z');
  const tanggalKembali = new Date('2026-11-08T00:00:00.000Z');
  const existingRental = await prisma.penyewaan.findFirst({
    where: {
      pelangganId: pelanggan.id,
      kendaraanId: kendaraan.id,
      tanggal_sewa: tanggalSewa,
      tanggal_kembali: tanggalKembali,
    },
  });

  if (!existingRental) {
    await prisma.penyewaan.create({
      data: {
        pelangganId: pelanggan.id,
        kendaraanId: kendaraan.id,
        tanggal_sewa: tanggalSewa,
        tanggal_kembali: tanggalKembali,
        total_biaya: 100010,
      },
    });
  }

  console.log(
    `Data praktik siap: ${pelanggan.nama}, ${kendaraan.nama_kendaraan} (${kendaraan.plat_nomor}).`,
  );
} finally {
  await prisma.$disconnect();
}
