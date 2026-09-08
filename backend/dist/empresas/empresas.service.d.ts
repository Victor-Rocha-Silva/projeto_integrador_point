import { PrismaService } from "../prisma/prisma.service";
import { CreateEmpresaDto } from "./dto/create-empresa.dto";
export declare class EmpresasService {
    private prisma;
    constructor(prisma: PrismaService);
    criar(userId: string, dto: CreateEmpresaDto): Promise<{
        id: string;
        criadoEm: Date;
        userId: string;
        razaoSocial: string;
        cnpj: string;
        descricao: string | null;
        aprovado: boolean;
    }>;
    minhaEmpresa(userId: string): Promise<({
        vagas: {
            id: string;
            criadoEm: Date;
            descricao: string;
            titulo: string;
            requisitos: string;
            status: import(".prisma/client").$Enums.StatusVaga;
            empresaId: string;
        }[];
    } & {
        id: string;
        criadoEm: Date;
        userId: string;
        razaoSocial: string;
        cnpj: string;
        descricao: string | null;
        aprovado: boolean;
    }) | null>;
    listarTodas(): Promise<({
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
        criadoEm: Date;
        userId: string;
        razaoSocial: string;
        cnpj: string;
        descricao: string | null;
        aprovado: boolean;
    })[]>;
    aprovar(empresaId: string, aprovado: boolean): Promise<{
        id: string;
        criadoEm: Date;
        userId: string;
        razaoSocial: string;
        cnpj: string;
        descricao: string | null;
        aprovado: boolean;
    }>;
    buscarCandidatos(filtroHabilidade?: string): Promise<({
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
        habilidades: ({
            habilidade: {
                id: string;
                nome: string;
            };
        } & {
            id: string;
            perfilId: string;
            habilidadeId: string;
            nivel: string;
        })[];
    } & {
        id: string;
        telefone: string | null;
        resumo: string | null;
        linkedin: string | null;
        github: string | null;
        curriculoUrl: string | null;
        userId: string;
    })[]>;
}
