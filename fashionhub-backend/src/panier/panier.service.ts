// panier.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';

@Injectable()
export class PanierService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePanierDto) {
    return this.prisma.panier.create({
      data: dto,
      include: { articles: true },
    });
  }

  async findAll() {
    return this.prisma.panier.findMany({
      include: { articles: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.panier.findUniqueOrThrow({
      where: { id },
      include: { articles: true },
    });
  }

  async update(id: number, dto: UpdatePanierDto) {
    return this.prisma.panier.update({
      where: { id },
      data: {
        ...dto,
        updatedAt: new Date(),
      },
    });
  }

 async remove(id: number) {
  await this.prisma.articlePanier.deleteMany({
    where: { idPanier: id },
  });

  return this.prisma.panier.delete({
    where: { id },
  });
}

}
