import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { CurrentUser } from "../auth/current-user.decorator";
import { Role, StatusCandidatura } from "@prisma/client";
import { CandidaturasService } from "./candidaturas.service";

@Controller("candidaturas")
@UseGuards(JwtAuthGuard, RolesGuard)
export class CandidaturasController {
  constructor(private candidaturasService: CandidaturasService) {}

  @Post(":vagaId")
  @Roles(Role.CANDIDATO)
  candidatar(@CurrentUser() user, @Param("vagaId") vagaId: string) {
    return this.candidaturasService.candidatar(user.userId, vagaId);
  }

  @Get("minhas")
  @Roles(Role.CANDIDATO)
  minhasCandidaturas(@CurrentUser() user) {
    return this.candidaturasService.minhasCandidaturas(user.userId);
  }

  @Patch(":id/status/:status")
  @Roles(Role.EMPRESA, Role.ADMIN)
  alterarStatus(@Param("id") id: string, @Param("status") status: StatusCandidatura) {
    return this.candidaturasService.alterarStatus(id, status);
  }
}
