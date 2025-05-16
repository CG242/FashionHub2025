import { IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticlePanierDto {
  @ApiProperty({ example: 1, description: 'ID du panier auquel l’article est associé' })
  @IsInt()
  idPanier: number;

  @ApiProperty({ example: 5, description: 'ID du produit à ajouter au panier' })
  @IsInt()
  idProduit: number;

  @ApiProperty({ example: 2, description: 'Quantité de ce produit à ajouter' })
  @IsInt()
  @IsPositive()
  quantite: number;
}
