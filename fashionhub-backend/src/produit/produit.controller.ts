import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Produits') // Regroupe toutes les routes sous "Produits"
@Controller('produits')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau produit' })
  @ApiResponse({ status: 201, description: 'Produit créé avec succès.' })
  @ApiResponse({ status: 400, description: 'Erreur de validation du produit.' })
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitService.create(createProduitDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les produits' })
  @ApiResponse({ status: 200, description: 'Liste de tous les produits.' })
  findAll() {
    return this.produitService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un produit par ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID du produit' })
  @ApiResponse({ status: 200, description: 'Produit trouvé.' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.produitService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un produit par ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID du produit à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Produit mis à jour.' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé.' })
  update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitService.update(+id, updateProduitDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un produit par ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID du produit à supprimer' })
  @ApiResponse({ status: 200, description: 'Produit supprimé.' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé.' })
  remove(@Param('id') id: string) {
    return this.produitService.remove(+id);
  }
}
