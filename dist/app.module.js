"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const kendaraan_module_1 = require("./kendaraan/kendaraan.module");
const pelanggan_module_1 = require("./pelanggan/pelanggan.module");
const penyewaan_module_1 = require("./penyewaan/penyewaan.module");
const prisma_module_1 = require("./prisma.module");
const DAFTAR_PENYEWAAN_QUERY = `query DaftarPenyewaan {
  penyewaan {
    tanggal_sewa
    total_biaya
    pelanggan {
      nama
    }
    kendaraan {
      merk: nama_kendaraan
    }
  }
}`;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                sortSchema: true,
                graphiql: false,
                plugins: [
                    (0, default_1.ApolloServerPluginLandingPageLocalDefault)({
                        embed: {
                            runTelemetry: false,
                            endpointIsEditable: true,
                        },
                        document: DAFTAR_PENYEWAAN_QUERY,
                    }),
                ],
            }),
            prisma_module_1.PrismaModule,
            pelanggan_module_1.PelangganModule,
            kendaraan_module_1.KendaraanModule,
            penyewaan_module_1.PenyewaanModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map