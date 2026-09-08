import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { CurrentUser } from "../auth/current-user.decorator";
import { Role, StatusVaga } from "@prisma/client";
import { VagasService } from "./vagas.service";
import { CreateVagaDto } from "./dto/create-vaga.dto";

@Controller("vagas")
@UseGuards(JwtAuthGuard, RolesGuard)
export class VagasController {
  constructor(private vagasService: VagasService) {}

  @Post()
  @Roles(Role.EMPRESA)
  criar(@CurrentUser() user, @Body() dto: CreateVagaDto) {
    return this.vagasService.criar(user.userId, dto);
  }

  @Get()
  @Roles(Role.CANDIDATO, Role.EMPRESA, Role.ADMIN)
  listarAbertas() {
    return this.vagasService.listarAbertas();
  }

  @Get("minhas")
  @Roles(Role.EMPRESA)
  minhasVagas(@CurrentUser() user) {
    return this.vagasService.minhasVagas(user.userId);
  }

  @Get("todas")
  @Roles(Role.ADMIN)
  listarTodas() {
    return this.vagasService.listarTodas();
  }

  @Patch(":id/status/:status")
  @Roles(Role.EMPRESA, Role.ADMIN)
  alterarStatus(@Param("id") id: string, @Param("status") status: StatusVaga) {
    return this.vagasService.alterarStatus(id, status);
  }
}
