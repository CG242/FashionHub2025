import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';

@Injectable()
export class AdresseService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAdresseDto) {
    return this.prisma.adresse.create({ data: dto });
  }

  async findAll() {
    return this.prisma.adresse.findMany();
  }

  async findOne(id: number) {
    const adresse = await this.prisma.adresse.findUnique({ where: { id } });
    if (!adresse) throw new NotFoundException(`Adresse ${id} introuvable`);
    return adresse;
  }

  async update(id: number, dto: UpdateAdresseDto) {
    await this.findOne(id); // vérifie que l'adresse existe
    return this.prisma.adresse.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
  const adresse = await this.prisma.adresse.findUnique({
    where: { id },
    include: { commandes: true }, // On charge les commandes liées
  });

  if (!adresse) {
    throw new NotFoundException(`Adresse ${id} non trouvée.`);
  }

  if (adresse.commandes.length > 0) {
    throw new BadRequestException(`Impossible de supprimer l'adresse car elle est utilisée dans une ou plusieurs commandes.`);
  }

  return this.prisma.adresse.delete({ where: { id } });
}

}
