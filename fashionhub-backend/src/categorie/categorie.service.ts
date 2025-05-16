import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Injectable()
export class CategorieService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategorieDto) {
    return this.prisma.categorie.create({ data });
  }

  findAll() {
    return this.prisma.categorie.findMany();
  }

  findOne(id: number) {
    return this.prisma.categorie.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateCategorieDto) {
    return this.prisma.categorie.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.categorie.delete({ where: { id } });
  }
}
