import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { Role } from "@prisma/client";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    validarOuCriarUsuario(googleUser: {
        googleId: string;
        email: string;
        nome: string;
        avatarUrl: string | null;
    }): Promise<{
        id: string;
        email: string;
        googleId: string;
        nome: string;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        ativo: boolean;
        criadoEm: Date;
    }>;
    gerarToken(user: {
        id: string;
        email: string;
        role: Role;
    }): string;
}
