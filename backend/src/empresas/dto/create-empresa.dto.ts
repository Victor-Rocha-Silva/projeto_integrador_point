import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEmpresaDto {
  @IsNotEmpty()
  @IsString()
  razaoSocial: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
