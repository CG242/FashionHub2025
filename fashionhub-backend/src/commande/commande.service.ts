import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Injectable()
export class CommandeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCommandeDto) {
    const { articles, ...commandeData } = dto;

    return this.prisma.commande.create({
      data: {
        ...commandeData,
        articles: {
          create: articles.map((a) => ({
            idProduit: a.idProduit,
            quantite: a.quantite,
            prixUnit: a.prixUnit,
          })),
        },
      },
      include: {
        articles: true,
        adresse: true,
        paiement: true,
      },
    });
  }

  async findAll() {
    return this.prisma.commande.findMany({
      include: {
        articles: true,
        adresse: true,
        paiement: true,
      },
    });
  }

  async findOne(id: number) {
    const commande = await this.prisma.commande.findUnique({
      where: { id },
      include: {
        articles: true,
        adresse: true,
        paiement: true,
      },
    });

    if (!commande) {
      throw new NotFoundException(`Commande ${id} non trouvée`);
    }

    return commande;
  }

  async remove(id: number) {
    const commande = await this.prisma.commande.findUnique({
      where: { id },
    });

    if (!commande) {
      throw new NotFoundException(`Commande ${id} non trouvée`);
    }

    // Supprimer d'abord les articles liés à la commande
    await this.prisma.articleCommande.deleteMany({
      where: { idCommande: id },
    });

    // Puis supprimer la commande
    return this.prisma.commande.delete({
      where: { id },
    });
  }

  async update(id: number, dto: UpdateCommandeDto) {
    const commande = await this.prisma.commande.findUnique({
      where: { id },
    });

    if (!commande) {
      throw new NotFoundException(`Commande ${id} non trouvée`);
    }

    const { articles, ...rest } = dto;

    // Supprimer les anciens articles si de nouveaux sont fournis
    if (articles && articles.length > 0) {
      await this.prisma.articleCommande.deleteMany({
        where: { idCommande: id },
      });

      await this.prisma.articleCommande.createMany({
        data: articles.map((a) => ({
          idCommande: id,
          idProduit: a.idProduit,
          quantite: a.quantite,
          prixUnit: a.prixUnit,
        })),
      });
    }

    return this.prisma.commande.update({
      where: { id },
      data: {
        ...rest,
        updatedAt: new Date(),
      },
      include: {
        articles: true,
        adresse: true,
        paiement: true,
      },
    });
  }
}
