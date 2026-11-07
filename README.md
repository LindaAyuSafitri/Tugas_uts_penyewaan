# Rental Kendaraan

Aplikasi UTS rental kendaraan menggunakan NestJS, Prisma, MySQL, REST, dan
GraphQL. Panduan ini ditujukan untuk menjalankan proyek di Windows.

## Persyaratan

- Node.js LTS dan npm
- Docker Desktop dengan Docker Compose

## Menjalankan dari awal

Jalankan perintah berikut di PowerShell dari folder proyek:

```powershell
Copy-Item .env.example .env
docker compose up -d
npm ci
npm run db:setup
npm run start:dev
```

`docker compose up -d` menyalakan MySQL dan membuat database `penyewaan`
otomatis. `npm run db:setup` membuat tabel sesuai schema Prisma dan mengisi
data contoh. Tidak perlu membuat tabel atau memasukkan data secara manual.

Tunggu sampai kontainer MySQL sehat sebelum menjalankan `npm run db:setup`.
Status dapat diperiksa dengan:

```powershell
docker compose ps
```

Setelah server berjalan, buka:

- Apollo Sandbox lokal: <http://localhost:3000/graphql>
- REST daftar penyewaan: <http://localhost:3000/penyewaan>
- REST detail contoh: <http://localhost:3000/penyewaan/3>

Data contoh yang disiapkan:

- Pelanggan: `Linda010`
- Kendaraan: `Mobil010`, jenis `Mobil010`, plat `B 010 UTS`
- Penyewaan: 6-8 November 2026, total `100010`

Query GraphQL:

```graphql
query DaftarPenyewaan {
  penyewaan {
    id
    tanggal_sewa
    tanggal_kembali
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

Apollo Sandbox lokal tersedia pada endpoint tersebut dan tidak meminta login
ke Apollo Studio. Query contoh sudah dimuat; hasilnya menampilkan data NIM 010.

## Menutup dan menjalankan kembali

Hentikan server dengan `Ctrl+C`. Hentikan MySQL dengan:

```powershell
docker compose down
```

Data database disimpan pada Docker volume, sehingga tetap ada setelah kontainer
dihentikan. Jalankan kembali dengan `docker compose up -d` dan
`npm run start:dev`. Jangan gunakan `docker compose down -v` jika data ingin
tetap disimpan.

## Keamanan konfigurasi

`.env` berisi alamat koneksi database lokal dan tidak boleh diunggah. Salin
`.env.example` untuk membuat `.env`; kredensial dalam konfigurasi Docker hanya
untuk demonstrasi lokal tugas ini, bukan untuk server produksi. Jangan memakai
konfigurasi tersebut untuk layanan yang diakses publik.

Untuk dokumentasi endpoint, DTO, relasi Prisma, dan koleksi Postman, lihat
[API.md](./API.md).
