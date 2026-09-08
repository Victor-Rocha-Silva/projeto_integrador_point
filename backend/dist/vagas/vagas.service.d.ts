import { PrismaService } from "../prisma/prisma.service";
import { CreateVagaDto } from "./dto/create-vaga.dto";
import { StatusVaga } from "@prisma/client";
export declare class VagasService {
    private prisma;
    constructor(prisma: PrismaService);
    criar(userId: string, dto: CreateVagaDto): Promise<{
        id: string;
        criadoEm: Date;
        descricao: string;
        titulo: string;
        requisitos: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        empresaId: string;
    }>;
    listarAbertas(): Promise<({
        empresa: {
            id: string;
            criadoEm: Date;
            userId: string;
            razaoSocial: string;
            cnpj: string;
            descricao: string | null;
            aprovado: boolean;
        };
    } & {
        id: string;
        criadoEm: Date;
        descricao: string;
        titulo: string;
        requisitos: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        empresaId: string;
    })[]>;
    minhasVagas(userId: string): Promise<({
        candidaturas: ({
            user: {
                id: string;
                email: string;
                googleId: string;
                nome: string;
                avatarUrl: string | null;
                role: import(".prisma/client").$Enums.Role;
                ativo: boolean;
                criadoEm: Date;
            };
        } & {
            id: string;
            userId: string;
            status: import(".prisma/client").$Enums.StatusCandidatura;
            dataCandidatura: Date;
            vagaId: string;
        })[];
    } & {
        id: string;
        criadoEm: Date;
        descricao: string;
        titulo: string;
        requisitos: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        empresaId: string;
    })[]>;
    alterarStatus(vagaId: string, status: StatusVaga): Promise<{
        id: string;
        criadoEm: Date;
        descricao: string;
        titulo: string;
        requisitos: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        empresaId: string;
    }>;
    listarTodas(): Promise<({
        empresa: {
            id: string;
            criadoEm: Date;
            userId: string;
            razaoSocial: string;
            cnpj: string;
            descricao: string | null;
            aprovado: boolean;
        };
    } & {
        id: string;
        criadoEm: Date;
        descricao: string;
        titulo: string;
        requisitos: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        empresaId: string;
    })[]>;
}
