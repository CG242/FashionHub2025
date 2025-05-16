import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategorieDto {
  @ApiProperty({
    example: 'Homme',
    description: 'Libellé de la catégorie (ex: Homme, Femme, Chaussures, etc.)',
  })
  @IsString()
  @IsNotEmpty()
  libelle: string;
}
