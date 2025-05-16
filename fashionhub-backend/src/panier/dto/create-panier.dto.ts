import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePanierDto {
  @ApiProperty({ example: 1, description: 'ID de l’utilisateur auquel appartient le panier' })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
