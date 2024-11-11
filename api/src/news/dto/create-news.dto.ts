import { IsString, IsNotEmpty } from 'class-validator';
export class CreateNewsDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  chapeu: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  data_hora_publicacao: string;

  @IsString()
  @IsNotEmpty()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  conteudo: string;
}
