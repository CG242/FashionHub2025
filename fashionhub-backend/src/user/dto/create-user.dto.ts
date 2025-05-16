// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @ApiProperty({ example: '0600000000', required: false })
  @IsOptional()
  @IsString()
  tel?: string;

  @ApiProperty({ example: 'CLIENT' })
  @IsNotEmpty()
  @IsString()
  role: string;
}
