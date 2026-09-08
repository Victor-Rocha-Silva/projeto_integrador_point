import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusCandidatura } from "@prisma/client";

@Injectable()
export class CandidaturasService {
  constructor(private prisma: PrismaService) {}

  async candidatar(userId: string, vagaId: string) {
    return this.prisma.candidatura.create({ data: { userId, vagaId } });
  }

  async minhasCandidaturas(userId: string) {
    return this.prisma.candidatura.findMany({
      where: { userId },
      include: { vaga: { include: { empresa: true } } },
      orderBy: { dataCandidatura: "desc" },
    });
  }

  async alterarStatus(candidaturaId: string, status: StatusCandidatura) {
    return this.prisma.candidatura.update({ where: { id: candidaturaId }, data: { status } });
  }
}
