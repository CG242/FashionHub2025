import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';

@Controller('adresses')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post()
  create(@Body() dto: CreateAdresseDto) {
    return this.adresseService.create(dto);
  }

  @Get()
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adresseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAdresseDto) {
    return this.adresseService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adresseService.remove(id);
  }
}
