import { Kendaraan } from '../../kendaraan/entities/kendaraan.entity';
import { Pelanggan } from '../../pelanggan/entities/pelanggan.entity';
export declare class Penyewaan {
    id: number;
    pelangganId: number;
    kendaraanId: number;
    tanggal_sewa: Date;
    tanggal_kembali: Date;
    total_biaya: number;
    pelanggan: Pelanggan;
    kendaraan: Kendaraan;
    createdAt: Date;
    updatedAt: Date;
}
