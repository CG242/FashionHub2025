import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticlePanierDto } from './dto/create-article-panier.dto';
import { UpdateArticlePanierDto } from './dto/update-article-panier.dto';

@Injectable()
export class ArticlePanierService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateArticlePanierDto) {
    return this.prisma.articlePanier.create({ data });
  }

  findAll() {
    return this.prisma.articlePanier.findMany({ include: { produit: true } });
  }

  findOne(id: number) {
    return this.prisma.articlePanier.findUnique({
      where: { id },
      include: { produit: true },
    });
  }

  update(id: number, data: UpdateArticlePanierDto) {
    return this.prisma.articlePanier.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.articlePanier.delete({ where: { id } });
  }
}
