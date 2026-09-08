import { IsNotEmpty, IsString } from "class-validator";

export class CreateVagaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  requisitos: string;
}
