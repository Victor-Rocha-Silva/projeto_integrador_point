import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateEmpresaDto } from "./dto/create-empresa.dto";

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  async criar(userId: string, dto: CreateEmpresaDto) {
    return this.prisma.empresa.create({ data: { userId, ...dto } });
  }

  async minhaEmpresa(userId: string) {
    return this.prisma.empresa.findUnique({ where: { userId }, include: { vagas: true } });
  }

  async listarTodas() {
    return this.prisma.empresa.findMany({ include: { user: true } });
  }

  async aprovar(empresaId: string, aprovado: boolean) {
    return this.prisma.empresa.update({ where: { id: empresaId }, data: { aprovado } });
  }

  async buscarCandidatos(filtroHabilidade?: string) {
    return this.prisma.perfilCandidato.findMany({
      where: filtroHabilidade
        ? { habilidades: { some: { habilidade: { nome: { contains: filtroHabilidade, mode: "insensitive" } } } } }
        : undefined,
      include: { user: true, habilidades: { include: { habilidade: true } } },
    });
  }
}
