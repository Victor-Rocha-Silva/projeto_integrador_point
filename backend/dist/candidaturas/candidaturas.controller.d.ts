import { StatusCandidatura } from "@prisma/client";
import { CandidaturasService } from "./candidaturas.service";
export declare class CandidaturasController {
    private candidaturasService;
    constructor(candidaturasService: CandidaturasService);
    candidatar(user: any, vagaId: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        userId: string;
        vagaId: string;
    }>;
    minhasCandidaturas(user: any): Promise<({
        vaga: {
            empresa: {
                id: string;
                userId: string;
                descricao: string | null;
                criadoEm: Date;
                razaoSocial: string;
                cnpj: string;
                aprovado: boolean;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.StatusVaga;
            titulo: string;
            descricao: string;
            requisitos: string;
            empresaId: string;
            criadoEm: Date;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        userId: string;
        vagaId: string;
    })[]>;
    alterarStatus(id: string, status: StatusCandidatura): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.StatusCandidatura;
        dataCandidatura: Date;
        userId: string;
        vagaId: string;
    }>;
}
