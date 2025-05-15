import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProduitModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { CommandeModule } from './commande/commande.module';
import { PaiementModule } from './paiement/paiement.module';

@Module({
  imports: [PrismaModule, UserModule, ProduitModule, CategorieModule, CommandeModule, PaiementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
