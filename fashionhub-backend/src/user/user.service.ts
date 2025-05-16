// src/user/user.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({ data: createUserDto });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Un utilisateur avec cet email existe déjà.');
      }
      throw new InternalServerErrorException('Erreur lors de la création de l’utilisateur.');
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'ID ${id} introuvable.`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Erreur lors de la mise à jour de l’utilisateur.');
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(
        'Impossible de supprimer l’utilisateur. Il est peut-être lié à d’autres entités.',
      );
    }
  }
}
