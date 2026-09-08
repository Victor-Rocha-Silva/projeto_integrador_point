import { PrismaService } from "../prisma/prisma.service";
import { UpdatePerfilDto } from "./dto/update-perfil.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    obterPerfil(userId: string): Promise<({
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
    }) | null>;
    atualizarPerfil(userId: string, dto: UpdatePerfilDto): Promise<{
        id: string;
        telefone: string | null;
        resumo: string | null;
        linkedin: string | null;
        github: string | null;
        curriculoUrl: string | null;
        userId: string;
    }>;
    listarTodos(): Promise<{
        id: string;
        email: string;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        ativo: boolean;
        criadoEm: Date;
    }[]>;
    alternarAtivo(userId: string, ativo: boolean): Promise<{
        id: string;
        email: string;
        googleId: string;
        nome: string;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        ativo: boolean;
        criadoEm: Date;
    }>;
}
