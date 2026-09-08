import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdatePerfilDto } from "./dto/update-perfil.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async obterPerfil(userId: string) {
    return this.prisma.perfilCandidato.findUnique({
      where: { userId },
      include: { habilidades: { include: { habilidade: true } } },
    });
  }

  async atualizarPerfil(userId: string, dto: UpdatePerfilDto) {
    return this.prisma.perfilCandidato.upsert({
      where: { userId },
      update: dto,
      create: { userId, ...dto },
    });
  }

  async listarTodos() {
    return this.prisma.user.findMany({
      select: { id: true, nome: true, email: true, role: true, ativo: true, criadoEm: true },
    });
  }

  async alternarAtivo(userId: string, ativo: boolean) {
    return this.prisma.user.update({ where: { id: userId }, data: { ativo } });
  }
}
