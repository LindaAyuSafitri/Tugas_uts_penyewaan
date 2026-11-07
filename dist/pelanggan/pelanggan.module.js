"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelangganModule = void 0;
const common_1 = require("@nestjs/common");
const pelanggan_service_1 = require("./pelanggan.service");
const pelanggan_resolver_1 = require("./pelanggan.resolver");
let PelangganModule = class PelangganModule {
};
exports.PelangganModule = PelangganModule;
exports.PelangganModule = PelangganModule = __decorate([
    (0, common_1.Module)({
        providers: [pelanggan_resolver_1.PelangganResolver, pelanggan_service_1.PelangganService],
    })
], PelangganModule);
//# sourceMappingURL=pelanggan.module.js.map