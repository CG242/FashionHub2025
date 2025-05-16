import { Module } from '@nestjs/common';
import { ArticlePanierService } from './article-panier.service';
import { ArticlePanierController } from './article-panier.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArticlePanierController],
  providers: [ArticlePanierService],
})
export class ArticlePanierModule {}
