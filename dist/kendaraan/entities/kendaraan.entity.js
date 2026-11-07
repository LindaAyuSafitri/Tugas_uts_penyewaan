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
exports.Kendaraan = void 0;
const graphql_1 = require("@nestjs/graphql");
const penyewaan_entity_1 = require("../../penyewaan/entities/penyewaan.entity");
let Kendaraan = class Kendaraan {
};
exports.Kendaraan = Kendaraan;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Kendaraan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Kendaraan.prototype, "nama_kendaraan", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Kendaraan.prototype, "jenis", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Kendaraan.prototype, "plat_nomor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Kendaraan.prototype, "harga_sewa_per_hari", void 0);
__decorate([
    (0, graphql_1.Field)(() => [penyewaan_entity_1.Penyewaan], { nullable: true }),
    __metadata("design:type", Array)
], Kendaraan.prototype, "penyewaan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Kendaraan.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], Kendaraan.prototype, "updatedAt", void 0);
exports.Kendaraan = Kendaraan = __decorate([
    (0, graphql_1.ObjectType)()
], Kendaraan);
//# sourceMappingURL=kendaraan.entity.js.map