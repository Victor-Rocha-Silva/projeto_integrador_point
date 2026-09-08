import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { EmpresasModule } from "./empresas/empresas.module";
import { VagasModule } from "./vagas/vagas.module";
import { CandidaturasModule } from "./candidaturas/candidaturas.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    EmpresasModule,
    VagasModule,
    CandidaturasModule,
  ],
})
export class AppModule {}
