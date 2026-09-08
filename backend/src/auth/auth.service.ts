import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { Role } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async validarOuCriarUsuario(googleUser: {
    googleId: string;
    email: string;
    nome: string;
    avatarUrl: string | null;
  }) {
    let user = await this.prisma.user.findUnique({ where: { googleId: googleUser.googleId } });

    if (!user) {
      const adminEmails = (this.config.get<string>("ADMIN_EMAILS") || "")
        .split(",")
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean);

      const role: Role = adminEmails.includes(googleUser.email.toLowerCase())
        ? Role.ADMIN
        : Role.CANDIDATO;

      user = await this.prisma.user.create({
        data: {
          googleId: googleUser.googleId,
          email: googleUser.email,
          nome: googleUser.nome,
          avatarUrl: googleUser.avatarUrl,
          role,
        },
      });
    }

    return user;
  }

  gerarToken(user: { id: string; email: string; role: Role }) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return this.jwt.sign(payload);
  }
}
