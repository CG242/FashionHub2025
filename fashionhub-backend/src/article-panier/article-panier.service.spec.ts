import { Test, TestingModule } from '@nestjs/testing';
import { ArticlePanierService } from './article-panier.service';

describe('ArticlePanierService', () => {
  let service: ArticlePanierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlePanierService],
    }).compile();

    service = module.get<ArticlePanierService>(ArticlePanierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
