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
exports.PelangganResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const pelanggan_service_1 = require("./pelanggan.service");
const pelanggan_entity_1 = require("./entities/pelanggan.entity");
const create_pelanggan_input_1 = require("./dto/create-pelanggan.input");
const update_pelanggan_input_1 = require("./dto/update-pelanggan.input");
let PelangganResolver = class PelangganResolver {
    constructor(pelangganService) {
        this.pelangganService = pelangganService;
    }
    createPelanggan(createPelangganInput) {
        return this.pelangganService.create(createPelangganInput);
    }
    findAll() {
        return this.pelangganService.findAll();
    }
    findOne(id) {
        return this.pelangganService.findOne(id);
    }
    updatePelanggan(updatePelangganInput) {
        return this.pelangganService.update(updatePelangganInput.id, updatePelangganInput);
    }
    removePelanggan(id) {
        return this.pelangganService.remove(id);
    }
};
exports.PelangganResolver = PelangganResolver;
__decorate([
    (0, graphql_1.Mutation)(() => pelanggan_entity_1.Pelanggan),
    __param(0, (0, graphql_1.Args)('createPelangganInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pelanggan_input_1.CreatePelangganInput]),
    __metadata("design:returntype", void 0)
], PelangganResolver.prototype, "createPelanggan", null);
__decorate([
    (0, graphql_1.Query)(() => [pelanggan_entity_1.Pelanggan], { name: 'pelanggan' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PelangganResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => pelanggan_entity_1.Pelanggan, { name: 'pelangganById' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PelangganResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => pelanggan_entity_1.Pelanggan),
    __param(0, (0, graphql_1.Args)('updatePelangganInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pelanggan_input_1.UpdatePelangganInput]),
    __metadata("design:returntype", void 0)
], PelangganResolver.prototype, "updatePelanggan", null);
__decorate([
    (0, graphql_1.Mutation)(() => pelanggan_entity_1.Pelanggan),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PelangganResolver.prototype, "removePelanggan", null);
exports.PelangganResolver = PelangganResolver = __decorate([
    (0, graphql_1.Resolver)(() => pelanggan_entity_1.Pelanggan),
    __metadata("design:paramtypes", [pelanggan_service_1.PelangganService])
], PelangganResolver);
//# sourceMappingURL=pelanggan.resolver.js.map