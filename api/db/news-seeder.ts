import { News } from '../src/news/entities/news.entity';
import { DataSource } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

export class NewsSeeder {
  async run(dataSource: DataSource): Promise<void> {
    const newsRepository = dataSource.getRepository(News);
    const filePath = path.resolve(__dirname, '../news.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const item of data) {
      const news = newsRepository.create({
        id: item.id,
        chapeu: item.chapeu,
        url: item.url,
        titulo: item.titulo,
        data_hora_publicacao: item.data_hora_publicacao,
        imagem: item.imagem,
        thumbnail: item.thumbnail,
        conteudo: item.conteudo,
      });

      await newsRepository.save(news);
    }

    console.log('News data has been seeded!');
  }
}
