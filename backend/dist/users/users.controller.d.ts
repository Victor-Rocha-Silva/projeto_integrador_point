import { UsersService } from "./users.service";
import { UpdatePerfilDto } from "./dto/update-perfil.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    meuPerfil(user: any): Promise<({
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
    }) | null>;
    atualizarMeuPerfil(user: any, dto: UpdatePerfilDto): Promise<{
        id: string;
        userId: string;
        telefone: string | null;
        resumo: string | null;
        linkedin: string | null;
        github: string | null;
        curriculoUrl: string | null;
    }>;
    listarTodos(): Promise<{
        id: string;
        criadoEm: Date;
        nome: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        ativo: boolean;
    }[]>;
    alternarAtivo(id: string, valor: string): Promise<{
        id: string;
        criadoEm: Date;
        nome: string;
        email: string;
        googleId: string;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        ativo: boolean;
    }>;
}
