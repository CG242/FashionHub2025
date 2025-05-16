import {
  IsInt,
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ArticleCommandeInput {
  @ApiProperty({ example: 1, description: "ID du produit commandé" })
  @IsInt()
  idProduit: number;

  @ApiProperty({ example: 2, description: "Quantité du produit commandé" })
  @IsInt()
  quantite: number;

  @ApiProperty({ example: 29.99, description: "Prix unitaire du produit" })
  @IsNumber()
  prixUnit: number;
}

export class CreateCommandeDto {
  @ApiProperty({ example: 1, description: "ID de l'utilisateur qui passe la commande" })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 3, description: "ID de l'adresse de livraison" })
  @IsInt()
  idAdresse: number;

  @ApiProperty({ example: 59.98, description: "Montant total de la commande" })
  @IsNumber()
  montantTotal: number;

  @ApiProperty({ example: 'en_attente', description: "Statut de la commande (ex: en_attente, payé, livré)" })
  @IsString()
  statut: string;

  @ApiProperty({
    type: [ArticleCommandeInput],
    description: "Liste des articles commandés",
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ArticleCommandeInput)
  articles: ArticleCommandeInput[];
}
