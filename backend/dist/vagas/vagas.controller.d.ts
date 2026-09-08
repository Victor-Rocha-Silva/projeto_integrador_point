import { StatusVaga } from "@prisma/client";
import { VagasService } from "./vagas.service";
import { CreateVagaDto } from "./dto/create-vaga.dto";
export declare class VagasController {
    private vagasService;
    constructor(vagasService: VagasService);
    criar(user: any, dto: CreateVagaDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        titulo: string;
        descricao: string;
        requisitos: string;
        empresaId: string;
        criadoEm: Date;
    }>;
    listarAbertas(): Promise<({
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
    })[]>;
    minhasVagas(user: any): Promise<({
        candidaturas: ({
            user: {
                id: string;
                criadoEm: Date;
                nome: string;
                email: string;
                googleId: string;
                avatarUrl: string | null;
                role: import(".prisma/client").$Enums.Role;
                ativo: boolean;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.StatusCandidatura;
            dataCandidatura: Date;
            userId: string;
            vagaId: string;
        })[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        titulo: string;
        descricao: string;
        requisitos: string;
        empresaId: string;
        criadoEm: Date;
    })[]>;
    listarTodas(): Promise<({
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
    })[]>;
    alterarStatus(id: string, status: StatusVaga): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.StatusVaga;
        titulo: string;
        descricao: string;
        requisitos: string;
        empresaId: string;
        criadoEm: Date;
    }>;
}
