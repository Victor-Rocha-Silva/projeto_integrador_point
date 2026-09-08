import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { CurrentUser } from "./current-user.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService, private config: ConfigService) {}

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth() {
    // Redireciona para a tela de login do Google. Nada a fazer aqui.
  }

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    const user = await this.authService.validarOuCriarUsuario(req.user);
    const token = this.authService.gerarToken(user);
    const frontendUrl = this.config.get<string>("FRONTEND_URL");
    res.redirect(frontendUrl + "/auth/callback?token=" + token);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user) {
    return user;
  }
}
