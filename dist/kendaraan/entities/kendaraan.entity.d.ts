import { Penyewaan } from '../../penyewaan/entities/penyewaan.entity';
export declare class Kendaraan {
    id: number;
    nama_kendaraan: string;
    jenis: string;
    plat_nomor: string;
    harga_sewa_per_hari: number;
    penyewaan: Penyewaan[];
    createdAt: Date;
    updatedAt: Date;
}
