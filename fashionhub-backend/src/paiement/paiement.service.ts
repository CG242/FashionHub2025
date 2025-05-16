import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';

@Injectable()
export class PaiementService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePaiementDto) {
    return this.prisma.paiement.create({ data });
  }

  findAll() {
    return this.prisma.paiement.findMany();
  }

  findOne(id: number) {
    return this.prisma.paiement.findUnique({ where: { id } });
  }

  update(id: number, data: UpdatePaiementDto) {
    return this.prisma.paiement.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.paiement.delete({ where: { id } });
  }
}
