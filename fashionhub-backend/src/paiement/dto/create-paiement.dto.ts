import { IsInt, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaiementDto {
  @ApiProperty({ example: 1, description: 'ID de la commande liée au paiement' })
  @IsInt()
  idCommande: number;

  @ApiProperty({ example: 49.99, description: 'Montant total du paiement' })
  @IsNumber()
  montant: number;

  @ApiProperty({ example: 'réussi', description: 'Statut du paiement (ex: réussi, en_attente, échoué)' })
  @IsString()
  statut: string;

  @ApiProperty({ example: 'mobile_money', description: 'Méthode de paiement utilisée (ex: carte_bancaire, mobile_money)' })
  @IsString()
  moyenPaiement: string;

  @ApiProperty({ example: 'TXN_123456789', description: 'Identifiant de transaction du fournisseur de paiement' })
  @IsString()
  idTransaction: string;
}
