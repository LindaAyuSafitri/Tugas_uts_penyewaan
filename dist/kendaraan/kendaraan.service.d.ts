import { CreateKendaraanInput } from './dto/create-kendaraan.input';
import { UpdateKendaraanInput } from './dto/update-kendaraan.input';
import { PrismaService } from '../prisma.service';
export declare class KendaraanService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createKendaraanInput: CreateKendaraanInput): import(".prisma/client").Prisma.Prisma__KendaraanClient<{
        nama_kendaraan: string;
        jenis: string;
        plat_nomor: string;
        harga_sewa_per_hari: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
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
        nama_kendaraan: string;
        jenis: string;
        plat_nomor: string;
        harga_sewa_per_hari: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__KendaraanClient<{
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
        nama_kendaraan: string;
        jenis: string;
        plat_nomor: string;
        harga_sewa_per_hari: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateKendaraanInput: UpdateKendaraanInput): import(".prisma/client").Prisma.Prisma__KendaraanClient<{
        nama_kendaraan: string;
        jenis: string;
        plat_nomor: string;
        harga_sewa_per_hari: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__KendaraanClient<{
        nama_kendaraan: string;
        jenis: string;
        plat_nomor: string;
        harga_sewa_per_hari: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
