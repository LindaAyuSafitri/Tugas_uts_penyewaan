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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KendaraanResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const kendaraan_service_1 = require("./kendaraan.service");
const kendaraan_entity_1 = require("./entities/kendaraan.entity");
const create_kendaraan_input_1 = require("./dto/create-kendaraan.input");
const update_kendaraan_input_1 = require("./dto/update-kendaraan.input");
let KendaraanResolver = class KendaraanResolver {
    constructor(kendaraanService) {
        this.kendaraanService = kendaraanService;
    }
    createKendaraan(createKendaraanInput) {
        return this.kendaraanService.create(createKendaraanInput);
    }
    findAll() {
        return this.kendaraanService.findAll();
    }
    findOne(id) {
        return this.kendaraanService.findOne(id);
    }
    updateKendaraan(updateKendaraanInput) {
        return this.kendaraanService.update(updateKendaraanInput.id, updateKendaraanInput);
    }
    removeKendaraan(id) {
        return this.kendaraanService.remove(id);
    }
};
exports.KendaraanResolver = KendaraanResolver;
__decorate([
    (0, graphql_1.Mutation)(() => kendaraan_entity_1.Kendaraan),
    __param(0, (0, graphql_1.Args)('createKendaraanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kendaraan_input_1.CreateKendaraanInput]),
    __metadata("design:returntype", void 0)
], KendaraanResolver.prototype, "createKendaraan", null);
__decorate([
    (0, graphql_1.Query)(() => [kendaraan_entity_1.Kendaraan], { name: 'kendaraan' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KendaraanResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => kendaraan_entity_1.Kendaraan, { name: 'kendaraanById' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KendaraanResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => kendaraan_entity_1.Kendaraan),
    __param(0, (0, graphql_1.Args)('updateKendaraanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_kendaraan_input_1.UpdateKendaraanInput]),
    __metadata("design:returntype", void 0)
], KendaraanResolver.prototype, "updateKendaraan", null);
__decorate([
    (0, graphql_1.Mutation)(() => kendaraan_entity_1.Kendaraan),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KendaraanResolver.prototype, "removeKendaraan", null);
exports.KendaraanResolver = KendaraanResolver = __decorate([
    (0, graphql_1.Resolver)(() => kendaraan_entity_1.Kendaraan),
    __metadata("design:paramtypes", [kendaraan_service_1.KendaraanService])
], KendaraanResolver);
//# sourceMappingURL=kendaraan.resolver.js.map