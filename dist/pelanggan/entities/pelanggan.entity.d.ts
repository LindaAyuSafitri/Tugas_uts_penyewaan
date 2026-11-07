import { Penyewaan } from '../../penyewaan/entities/penyewaan.entity';
export declare class Pelanggan {
    id: number;
    nama: string;
    email: string;
    no_telp: string;
    alamat: string;
    penyewaan: Penyewaan[];
    createdAt: Date;
    updatedAt: Date;
}
