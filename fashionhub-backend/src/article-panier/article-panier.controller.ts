import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ArticlePanierService } from './article-panier.service';
import { CreateArticlePanierDto } from './dto/create-article-panier.dto';
import { UpdateArticlePanierDto } from './dto/update-article-panier.dto';

@Controller('article-panier')
export class ArticlePanierController {
  constructor(private readonly service: ArticlePanierService) {}

  @Post()
  create(@Body() dto: CreateArticlePanierDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateArticlePanierDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
