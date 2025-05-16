import { ApiProperty } from '@nestjs/swagger';

export class CreateProduitDto {
  @ApiProperty({ example: 'T-shirt' })
  libelle: string;

  @ApiProperty({ example: 'T-shirt 100% coton' })
  description: string;

  @ApiProperty({ example: 29.99 })
  prix: number;

  @ApiProperty({ example: 100 })
  stock: number;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  imageUrl: string;

  @ApiProperty({ example: 1 })
  idCategorie: number;
}
