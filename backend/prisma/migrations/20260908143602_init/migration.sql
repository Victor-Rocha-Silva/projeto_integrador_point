-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CANDIDATO', 'EMPRESA');

-- CreateEnum
CREATE TYPE "StatusVaga" AS ENUM ('ABERTA', 'ENCERRADA', 'PENDENTE');

-- CreateEnum
CREATE TYPE "StatusCandidatura" AS ENUM ('ENVIADA', 'EM_ANALISE', 'APROVADA', 'RECUSADA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CANDIDATO',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerfilCandidato" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "telefone" TEXT,
    "resumo" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "curriculoUrl" TEXT,

    CONSTRAINT "PerfilCandidato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habilidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Habilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerfilHabilidade" (
    "id" TEXT NOT NULL,
    "perfilId" TEXT NOT NULL,
    "habilidadeId" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,

    CONSTRAINT "PerfilHabilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "descricao" TEXT,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaga" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "requisitos" TEXT NOT NULL,
    "status" "StatusVaga" NOT NULL DEFAULT 'PENDENTE',
    "empresaId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidatura" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vagaId" TEXT NOT NULL,
    "status" "StatusCandidatura" NOT NULL DEFAULT 'ENVIADA',
    "dataCandidatura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Candidatura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "PerfilCandidato_userId_key" ON "PerfilCandidato"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "PerfilHabilidade_perfilId_habilidadeId_key" ON "PerfilHabilidade"("perfilId", "habilidadeId");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_userId_key" ON "Empresa"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Candidatura_userId_vagaId_key" ON "Candidatura"("userId", "vagaId");

-- AddForeignKey
ALTER TABLE "PerfilCandidato" ADD CONSTRAINT "PerfilCandidato_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilHabilidade" ADD CONSTRAINT "PerfilHabilidade_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "PerfilCandidato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilHabilidade" ADD CONSTRAINT "PerfilHabilidade_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatura" ADD CONSTRAINT "Candidatura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidatura" ADD CONSTRAINT "Candidatura_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
