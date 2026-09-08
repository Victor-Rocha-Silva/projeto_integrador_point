import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { CurrentUser } from "../auth/current-user.decorator";
import { Role } from "@prisma/client";
import { EmpresasService } from "./empresas.service";
import { CreateEmpresaDto } from "./dto/create-empresa.dto";

@Controller("empresas")
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmpresasController {
  constructor(private empresasService: EmpresasService) {}

  @Post()
  @Roles(Role.EMPRESA)
  criar(@CurrentUser() user, @Body() dto: CreateEmpresaDto) {
    return this.empresasService.criar(user.userId, dto);
  }

  @Get("me")
  @Roles(Role.EMPRESA)
  minhaEmpresa(@CurrentUser() user) {
    return this.empresasService.minhaEmpresa(user.userId);
  }

  @Get("candidatos")
  @Roles(Role.EMPRESA)
  buscarCandidatos(@Query("habilidade") habilidade?: string) {
    return this.empresasService.buscarCandidatos(habilidade);
  }

  @Get()
  @Roles(Role.ADMIN)
  listarTodas() {
    return this.empresasService.listarTodas();
  }

  @Patch(":id/aprovar/:valor")
  @Roles(Role.ADMIN)
  aprovar(@Param("id") id: string, @Param("valor") valor: string) {
    return this.empresasService.aprovar(id, valor === "true");
  }
}
