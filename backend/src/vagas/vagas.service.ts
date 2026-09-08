import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateVagaDto } from "./dto/create-vaga.dto";
import { StatusVaga } from "@prisma/client";

@Injectable()
export class VagasService {
  constructor(private prisma: PrismaService) {}

  async criar(userId: string, dto: CreateVagaDto) {
    const empresa = await this.prisma.empresa.findUnique({ where: { userId } });
    if (!empresa) throw new NotFoundException("Cadastre sua empresa antes de publicar vagas.");

    return this.prisma.vaga.create({
      data: {
        ...dto,
        empresaId: empresa.id,
        status: empresa.aprovado ? StatusVaga.ABERTA : StatusVaga.PENDENTE,
      },
    });
  }

  async listarAbertas() {
    return this.prisma.vaga.findMany({
      where: { status: StatusVaga.ABERTA },
      include: { empresa: true },
      orderBy: { criadoEm: "desc" },
    });
  }

  async minhasVagas(userId: string) {
    const empresa = await this.prisma.empresa.findUnique({ where: { userId } });
    if (!empresa) return [];
    return this.prisma.vaga.findMany({
      where: { empresaId: empresa.id },
      include: { candidaturas: { include: { user: true } } },
      orderBy: { criadoEm: "desc" },
    });
  }

  async alterarStatus(vagaId: string, status: StatusVaga) {
    return this.prisma.vaga.update({ where: { id: vagaId }, data: { status } });
  }

  async listarTodas() {
    return this.prisma.vaga.findMany({ include: { empresa: true } });
  }
}
