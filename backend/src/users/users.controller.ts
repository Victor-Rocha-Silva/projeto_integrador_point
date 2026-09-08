import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { CurrentUser } from "../auth/current-user.decorator";
import { Role } from "@prisma/client";
import { UsersService } from "./users.service";
import { UpdatePerfilDto } from "./dto/update-perfil.dto";

@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("me/perfil")
  @Roles(Role.CANDIDATO)
  meuPerfil(@CurrentUser() user) {
    return this.usersService.obterPerfil(user.userId);
  }

  @Patch("me/perfil")
  @Roles(Role.CANDIDATO)
  atualizarMeuPerfil(@CurrentUser() user, @Body() dto: UpdatePerfilDto) {
    return this.usersService.atualizarPerfil(user.userId, dto);
  }

  @Get()
  @Roles(Role.ADMIN)
  listarTodos() {
    return this.usersService.listarTodos();
  }

  @Patch(":id/ativo/:valor")
  @Roles(Role.ADMIN)
  alternarAtivo(@Param("id") id: string, @Param("valor") valor: string) {
    return this.usersService.alternarAtivo(id, valor === "true");
  }
}
