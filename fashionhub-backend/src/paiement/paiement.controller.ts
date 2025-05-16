import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';

@Controller('paiements')
export class PaiementController {
  constructor(private readonly paiementService: PaiementService) {}

  @Post()
  create(@Body() createPaiementDto: CreatePaiementDto) {
    return this.paiementService.create(createPaiementDto);
  }

  @Get()
  findAll() {
    return this.paiementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paiementService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaiementDto: UpdatePaiementDto) {
    return this.paiementService.update(+id, updatePaiementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paiementService.remove(+id);
  }
}
