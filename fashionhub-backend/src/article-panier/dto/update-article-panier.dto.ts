import { PartialType } from '@nestjs/mapped-types';
import { CreateArticlePanierDto } from './create-article-panier.dto';

export class UpdateArticlePanierDto extends PartialType(CreateArticlePanierDto) {}
