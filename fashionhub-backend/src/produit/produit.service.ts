import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Injectable()
export class ProduitService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProduitDto) {
    return this.prisma.produit.create({ data });
  }

  findAll() {
    return this.prisma.produit.findMany({ include: { categorie: true } });
  }

  findOne(id: number) {
    return this.prisma.produit.findUnique({
      where: { id },
      include: { categorie: true },
    });
  }

  update(id: number, data: UpdateProduitDto) {
    return this.prisma.produit.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.produit.delete({ where: { id } });
  }
}
