import { EmpresasService } from "./empresas.service";
import { CreateEmpresaDto } from "./dto/create-empresa.dto";
export declare class EmpresasController {
    private empresasService;
    constructor(empresasService: EmpresasService);
    criar(user: any, dto: CreateEmpresaDto): Promise<{
        id: string;
        userId: string;
        descricao: string | null;
        criadoEm: Date;
        razaoSocial: string;
        cnpj: string;
        aprovado: boolean;
    }>;
    minhaEmpresa(user: any): Promise<({
        vagas: {
            id: string;
            status: import(".prisma/client").$Enums.StatusVaga;
            titulo: string;
            descricao: string;
            requisitos: string;
            empresaId: string;
            criadoEm: Date;
        }[];
    } & {
        id: string;
        userId: string;
        descricao: string | null;
        criadoEm: Date;
        razaoSocial: string;
        cnpj: string;
        aprovado: boolean;
    }) | null>;
    buscarCandidatos(habilidade?: string): Promise<({
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
        userId: string;
        telefone: string | null;
        resumo: string | null;
        linkedin: string | null;
        github: string | null;
        curriculoUrl: string | null;
    })[]>;
    listarTodas(): Promise<({
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
        userId: string;
        descricao: string | null;
        criadoEm: Date;
        razaoSocial: string;
        cnpj: string;
        aprovado: boolean;
    })[]>;
    aprovar(id: string, valor: string): Promise<{
        id: string;
        userId: string;
        descricao: string | null;
        criadoEm: Date;
        razaoSocial: string;
        cnpj: string;
        aprovado: boolean;
    }>;
}
