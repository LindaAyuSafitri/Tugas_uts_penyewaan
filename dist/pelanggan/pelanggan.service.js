"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelangganService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PelangganService = class PelangganService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPelangganInput) {
        return this.prisma.pelanggan.create({
            data: createPelangganInput,
        });
    }
    findAll() {
        return this.prisma.pelanggan.findMany({
            include: {
                penyewaan: { include: { pelanggan: true, kendaraan: true } },
            },
        });
    }
    findOne(id) {
        return this.prisma.pelanggan.findUniqueOrThrow({
            where: { id },
            include: {
                penyewaan: { include: { pelanggan: true, kendaraan: true } },
            },
        });
    }
    update(id, updatePelangganInput) {
        const { id: _id, ...data } = updatePelangganInput;
        return this.prisma.pelanggan.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.pelanggan.delete({
            where: { id },
        });
    }
};
exports.PelangganService = PelangganService;
exports.PelangganService = PelangganService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PelangganService);
//# sourceMappingURL=pelanggan.service.js.map