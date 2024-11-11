import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { News } from './entities/news.entity';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsService,
        {
          provide: getRepositoryToken(News),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            update: jest.fn().mockResolvedValue({ affected: 1 }),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all news', async () => {
    const news = [
      {
        id: '1',
        chapeu: 'chapeu',
        url: 'url',
        titulo: 'titulo',
        data_hora_publicacao: '2024-01-23',
        imagem: 'imagem',
        thumbnail: 'thumbnail',
        conteudo: 'conteudo',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(news);

    expect(await service.findAll()).toBe(news);
  });

  it('should return a news', async () => {
    const news = {
      id: '1',
      chapeu: 'chapeu',
      url: 'url',
      titulo: 'titulo',
      data_hora_publicacao: '2024-01-23',
      imagem: 'imagem',
      thumbnail: 'thumbnail',
      conteudo: 'conteudo',
      created_at: new Date(),
      updated_at: new Date(),
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(news);

    expect(await service.findOne('1')).toBe(news);
  });

  it('should create a news', async () => {
    const news = {
      id: '1',
      chapeu: 'chapeu',
      url: 'url',
      titulo: 'titulo',
      data_hora_publicacao: '2024-01-23',
      imagem: 'imagem',
      thumbnail: 'thumbnail',
      conteudo: 'conteudo',
      created_at: new Date(),
      updated_at: new Date(),
    };

    jest.spyOn(service, 'create').mockResolvedValue(news);

    expect(await service.create(news)).toBe(news);
  });

  it('should update a news', async () => {
    const updateNewsDto = {
      chapeu: 'chapeu',
      url: 'url',
      titulo: 'titulo',
      data_hora_publicacao: '2024-01-23',
      imagem: 'imagem',
      thumbnail: 'thumbnail',
      conteudo: 'conteudo',
    };

    expect(await service.update(1, updateNewsDto)).toEqual({ affected: 1 });
  });

  it('should delete a news', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(undefined);

    expect(await service.remove(1)).toBeUndefined();
  });
});
