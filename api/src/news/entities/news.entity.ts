import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  chapeu: string;

  @Column()
  url: string;

  @Column()
  @IsNotEmpty()
  titulo: string;

  @Column()
  data_hora_publicacao: string;

  @Column()
  @IsNotEmpty()
  imagem: string;

  @Column()
  @IsNotEmpty()
  thumbnail: string;

  @Column()
  @IsNotEmpty()
  conteudo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
