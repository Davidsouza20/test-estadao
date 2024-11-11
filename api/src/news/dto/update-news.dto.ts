import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  chapeu: string;
  url: string;
  titulo: string;
  data_hora_publicacao: string;
  imagem: string;
  thumbnail: string;
  conteudo: string;
}
