import { IsOptional, IsString } from "class-validator";

export class UpdatePerfilDto {
  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  resumo?: string;

  @IsOptional()
  @IsString()
  linkedin?: string;

  @IsOptional()
  @IsString()
  github?: string;

  @IsOptional()
  @IsString()
  curriculoUrl?: string;
}
