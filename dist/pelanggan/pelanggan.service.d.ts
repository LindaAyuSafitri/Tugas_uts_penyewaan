import { CreatePelangganInput } from './dto/create-pelanggan.input';
import { UpdatePelangganInput } from './dto/update-pelanggan.input';
import { PrismaService } from '../prisma.service';
export declare class PelangganService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPelangganInput: CreatePelangganInput): import(".prisma/client").Prisma.Prisma__PelangganClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        email: string;
        no_telp: string;
        alamat: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        penyewaan: ({
            pelanggan: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nama: string;
                email: string;
                no_telp: string;
                alamat: string;
            };
            kendaraan: {
                nama_kendaraan: string;
                jenis: string;
                plat_nomor: string;
                harga_sewa_per_hari: number;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            pelangganId: number;
            kendaraanId: number;
            tanggal_sewa: Date;
            tanggal_kembali: Date;
            total_biaya: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        email: string;
        no_telp: string;
        alamat: string;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PelangganClient<{
        penyewaan: ({
            pelanggan: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nama: string;
                email: string;
                no_telp: string;
                alamat: string;
            };
            kendaraan: {
                nama_kendaraan: string;
                jenis: string;
                plat_nomor: string;
                harga_sewa_per_hari: number;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            pelangganId: number;
            kendaraanId: number;
            tanggal_sewa: Date;
            tanggal_kembali: Date;
            total_biaya: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        email: string;
        no_telp: string;
        alamat: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePelangganInput: UpdatePelangganInput): import(".prisma/client").Prisma.Prisma__PelangganClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        email: string;
        no_telp: string;
        alamat: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PelangganClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        email: string;
        no_telp: string;
        alamat: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
