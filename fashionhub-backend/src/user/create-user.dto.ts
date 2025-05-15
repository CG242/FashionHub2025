export class CreateUserDto {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  tel?: string;
  role: string;
}