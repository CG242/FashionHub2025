// panier.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PanierService } from './panier.service';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';

@Controller('paniers')
export class PanierController {
  constructor(private readonly panierService: PanierService) {}

  @Post()
  async create(@Body() createPanierDto: CreatePanierDto) {
    try {
      return await this.panierService.create(createPanierDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.panierService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.panierService.findOne(+id);
    } catch (error) {
      throw new HttpException('Panier non trouvé', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePanierDto: UpdatePanierDto) {
    try {
      return await this.panierService.update(+id, updatePanierDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.panierService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
