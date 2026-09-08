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
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmpresasService = class EmpresasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criar(userId, dto) {
        return this.prisma.empresa.create({ data: { userId, ...dto } });
    }
    async minhaEmpresa(userId) {
        return this.prisma.empresa.findUnique({ where: { userId }, include: { vagas: true } });
    }
    async listarTodas() {
        return this.prisma.empresa.findMany({ include: { user: true } });
    }
    async aprovar(empresaId, aprovado) {
        return this.prisma.empresa.update({ where: { id: empresaId }, data: { aprovado } });
    }
    async buscarCandidatos(filtroHabilidade) {
        return this.prisma.perfilCandidato.findMany({
            where: filtroHabilidade
                ? { habilidades: { some: { habilidade: { nome: { contains: filtroHabilidade, mode: "insensitive" } } } } }
                : undefined,
            include: { user: true, habilidades: { include: { habilidade: true } } },
        });
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmpresasService);
//# sourceMappingURL=empresas.service.js.map