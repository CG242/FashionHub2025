import { Test, TestingModule } from '@nestjs/testing';
import { ArticlePanierController } from './article-panier.controller';

describe('ArticlePanierController', () => {
  let controller: ArticlePanierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlePanierController],
    }).compile();

    controller = module.get<ArticlePanierController>(ArticlePanierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
