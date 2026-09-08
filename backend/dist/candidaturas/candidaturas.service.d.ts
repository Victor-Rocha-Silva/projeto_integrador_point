import { PrismaService } from "../prisma/prisma.service";
import { StatusCandidatura } from "@prisma/client";
export declare class CandidaturasService {
    private prisma;
    constructor(prisma: PrismaService);
    candidatar(userId: string, vagaId: string): Promise<{
        id: string;
        userId: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        vagaId: string;
    }>;
    minhasCandidaturas(userId: string): Promise<({
        vaga: {
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
        };
    } & {
        id: string;
        userId: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        vagaId: string;
    })[]>;
    alterarStatus(candidaturaId: string, status: StatusCandidatura): Promise<{
        id: string;
        userId: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        vagaId: string;
    }>;
}
