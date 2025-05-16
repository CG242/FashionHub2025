import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdresseDto {
  @ApiProperty({ example: '12 Rue de la Paix', description: 'Rue de l’adresse' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 'Paris', description: 'Ville de l’adresse' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: '75001', description: 'Code postal de l’adresse' })
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @ApiProperty({ example: 'France', description: 'Pays de l’adresse' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: 1, description: 'ID de l’utilisateur lié à cette adresse' })
  @IsInt()
  userId: number;
}
