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
exports.VagasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let VagasService = class VagasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criar(userId, dto) {
        const empresa = await this.prisma.empresa.findUnique({ where: { userId } });
        if (!empresa)
            throw new common_1.NotFoundException("Cadastre sua empresa antes de publicar vagas.");
        return this.prisma.vaga.create({
            data: {
                ...dto,
                empresaId: empresa.id,
                status: empresa.aprovado ? client_1.StatusVaga.ABERTA : client_1.StatusVaga.PENDENTE,
            },
        });
    }
    async listarAbertas() {
        return this.prisma.vaga.findMany({
            where: { status: client_1.StatusVaga.ABERTA },
            include: { empresa: true },
            orderBy: { criadoEm: "desc" },
        });
    }
    async minhasVagas(userId) {
        const empresa = await this.prisma.empresa.findUnique({ where: { userId } });
        if (!empresa)
            return [];
        return this.prisma.vaga.findMany({
            where: { empresaId: empresa.id },
            include: { candidaturas: { include: { user: true } } },
            orderBy: { criadoEm: "desc" },
        });
    }
    async alterarStatus(vagaId, status) {
        return this.prisma.vaga.update({ where: { id: vagaId }, data: { status } });
    }
    async listarTodas() {
        return this.prisma.vaga.findMany({ include: { empresa: true } });
    }
};
exports.VagasService = VagasService;
exports.VagasService = VagasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VagasService);
//# sourceMappingURL=vagas.service.js.map