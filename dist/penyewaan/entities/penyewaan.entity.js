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
exports.Penyewaan = void 0;
const graphql_1 = require("@nestjs/graphql");
const kendaraan_entity_1 = require("../../kendaraan/entities/kendaraan.entity");
const pelanggan_entity_1 = require("../../pelanggan/entities/pelanggan.entity");
let Penyewaan = class Penyewaan {
};
exports.Penyewaan = Penyewaan;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Penyewaan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Penyewaan.prototype, "pelangganId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Penyewaan.prototype, "kendaraanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Penyewaan.prototype, "tanggal_sewa", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Penyewaan.prototype, "tanggal_kembali", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Penyewaan.prototype, "total_biaya", void 0);
__decorate([
    (0, graphql_1.Field)(() => pelanggan_entity_1.Pelanggan),
    __metadata("design:type", pelanggan_entity_1.Pelanggan)
], Penyewaan.prototype, "pelanggan", void 0);
__decorate([
    (0, graphql_1.Field)(() => kendaraan_entity_1.Kendaraan),
    __metadata("design:type", kendaraan_entity_1.Kendaraan)
], Penyewaan.prototype, "kendaraan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Penyewaan.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Penyewaan.prototype, "updatedAt", void 0);
exports.Penyewaan = Penyewaan = __decorate([
    (0, graphql_1.ObjectType)()
], Penyewaan);
//# sourceMappingURL=penyewaan.entity.js.map