# Jawaban dan Panduan Praktik Rental Kendaraan

## Rancangan endpoint REST

| Operasi | Method | URI |
| --- | --- | --- |
| Mengambil daftar penyewaan | `GET` | `/penyewaan` |
| Membuat penyewaan | `POST` | `/penyewaan` |
| Menghapus penyewaan berdasarkan ID | `DELETE` | `/penyewaan/:id` |
| Mengambil detail beserta relasi pelanggan dan kendaraan | `GET` | `/penyewaan/:id` |

Endpoint detail disertakan untuk memenuhi praktik mengambil transaksi beserta
profil pelanggan dan spesifikasi kendaraan.

## DTO dan validasi

DTO REST ada di
[src/penyewaan/dto/create-penyewaan.dto.ts](src/penyewaan/dto/create-penyewaan.dto.ts).
Validasi memastikan ID bilangan bulat positif, total biaya angka nonnegatif,
dan tanggal sewa berformat ISO. JSON harus mengirimkan ID serta total biaya
sebagai angka, bukan teks. Total biaya desimal ditolak oleh service karena
kolom database menggunakan `Int`.

## Relasi Prisma

Model lengkap terdapat di [prisma/schema.prisma](prisma/schema.prisma).
Ringkasan relasinya:

```prisma
model Pelanggan {
  id        Int         @id @default(autoincrement())
  nama      String
  email     String      @unique
  no_telp   String
  alamat    String
  penyewaan Penyewaan[]
}

model Kendaraan {
  id                  Int         @id @default(autoincrement())
  nama_kendaraan      String
  jenis               String
  plat_nomor          String      @unique
  harga_sewa_per_hari Int
  penyewaan           Penyewaan[]
}

model Penyewaan {
  id              Int       @id @default(autoincrement())
  pelangganId     Int
  kendaraanId     Int
  tanggal_sewa    DateTime
  tanggal_kembali DateTime
  total_biaya     Int
  pelanggan       Pelanggan @relation(fields: [pelangganId], references: [id], onDelete: Cascade)
  kendaraan       Kendaraan @relation(fields: [kendaraanId], references: [id], onDelete: Cascade)
}
```

Dengan demikian, satu pelanggan dapat memiliki banyak penyewaan dan satu
kendaraan dapat muncul pada banyak penyewaan.

## Service detail penyewaan

`findOne` di [src/penyewaan/penyewaan.service.ts](src/penyewaan/penyewaan.service.ts)
mengambil transaksi berdasarkan ID, menyertakan kedua relasinya, dan
mengembalikan HTTP 404 jika ID tidak ditemukan:

```typescript
async findOne(id: number) {
  const penyewaan = await this.prisma.penyewaan.findUnique({
    where: { id },
    include: { pelanggan: true, kendaraan: true },
  });
  if (!penyewaan) {
    throw new NotFoundException(`Penyewaan dengan ID ${id} tidak ditemukan.`);
  }
  return penyewaan;
}
```

## Apollo Sandbox dan query GraphQL

Buka Apollo Sandbox lokal di `http://localhost:3000/graphql`. Sandbox lokal
tertanam pada Apollo Server dan tidak meminta login Apollo Studio. Query soal
nomor 4 sudah dimuat sebagai query awal. `merk` merupakan alias untuk field
`nama_kendaraan` pada model Kendaraan.

```graphql
query DaftarPenyewaan {
  penyewaan {
    tanggal_sewa
    total_biaya
    pelanggan {
      nama
    }
    kendaraan {
      merk: nama_kendaraan
    }
  }
}
```

Untuk mengganti nama pelanggan contoh (ID `3`), jalankan mutation berikut.
Nama ini akan terlihat pada hasil query penyewaan karena transaksi terhubung
ke pelanggan dengan ID tersebut:

```graphql
mutation GantiNamaPelanggan {
  updatePelanggan(updatePelangganInput: { id: 3, nama: "Linda010" }) {
    id
    nama
  }
}
```

Untuk mengganti nama kendaraan contoh menjadi `Mobil010`, jalankan mutation:

```graphql
mutation GantiNamaKendaraan {
  updateKendaraan(updateKendaraanInput: { id: 3, nama_kendaraan: "Mobil010" }) {
    id
    nama_kendaraan
    plat_nomor
  }
}
```

## Data praktik dengan NIM 010

Data praktik berikut dapat dibuat ulang pada database yang dikonfigurasi proyek:

| Data | ID | Nilai untuk bukti |
| --- | --- | --- |
| Pelanggan | `3` | `Linda010` |
| Kendaraan | `3` | `Mobil010`, jenis `Mobil010`, plat `B 010 UTS` |
| Penyewaan | `3` | Biaya `100010`, 6-8 November 2026 |

Server dijalankan pada `http://localhost:3000`.

### Menyiapkan database di komputer lain

GitHub tidak menyimpan server database. Agar dosen tidak perlu memasang MySQL
dan membuat database secara manual, proyek menyediakan `docker-compose.yml`.
Dengan Docker Desktop aktif, salin `.env.example` menjadi `.env`, lalu jalankan:

```powershell
Copy-Item .env.example .env
docker compose up -d
npm ci
npm run db:setup
npm run start:dev
```

Docker membuat database MySQL `penyewaan`; `db:setup` membuat tabel dari schema
Prisma dan mengisi data praktik NIM 010. Seed aman dijalankan berulang kali:
seed menggunakan email pelanggan dan plat nomor sebagai identitas unik, serta
tidak membuat transaksi contoh duplikat. Lihat [README.md](./README.md) untuk
langkah menjalankan, mengecek, dan menghentikan layanan.

## Menguji dengan cURL pada Windows

Ambil daftar:

```powershell
curl.exe -i http://localhost:3000/penyewaan
```

Ambil detail untuk bukti relasi:

```powershell
curl.exe -i http://localhost:3000/penyewaan/3
```

Buat penyewaan baru. Gunakan lagi pasangan ID `3` untuk menampilkan NIM pada
response; request ini membuat transaksi tambahan:

```powershell
curl.exe -i -X POST http://localhost:3000/penyewaan -H "Content-Type: application/json" -d "{\"pelangganId\":3,\"kendaraanId\":3,\"total_biaya\":100010,\"tanggal_sewa\":\"2026-11-06T00:00:00.000Z\",\"tanggal_kembali\":\"2026-11-08T00:00:00.000Z\"}"
```

Hapus transaksi yang baru dibuat dengan mengganti `:id` menggunakan ID dari
response POST:

```powershell
curl.exe -i -X DELETE http://localhost:3000/penyewaan/:id
```

Atau impor [postman/rental-kendaraan.postman_collection.json](postman/rental-kendaraan.postman_collection.json)
ke Postman. Jalankan request secara berurutan. Screenshot setiap tab yang
memperlihatkan request dan response; jalankan DELETE paling akhir karena ia
menghapus transaksi yang baru dibuat. Penyewaan contoh ID `3` tetap tersedia.

## Bukti screenshot dan pengumpulan

Response REST detail dan hasil query GraphQL dengan nama serta plat yang memuat
`010` sudah diuji. Screenshot query dan response GraphQL tersedia pada hasil
browser di percakapan ini. Ambil screenshot REST langsung di Postman/cURL setelah
menjalankan request di atas agar method, URL, request, dan response terlihat.
Untuk screenshot Apollo Sandbox, arahkan endpoint ke
`http://localhost:3000/graphql` dan izinkan akses jaringan lokal jika browser
memintanya. CORS server sudah mengizinkan origin Apollo Studio secara terbatas.

Jika tugas meminta berkas PDF, ekspor dokumen ini sebagai PDF setelah
menambahkan screenshot Postman dan Apollo Sandbox milik Anda. Tinjau dan pahami
setiap bagian kode sebelum pengumpulan.
