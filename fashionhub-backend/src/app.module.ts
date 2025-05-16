import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProduitModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { CommandeModule } from './commande/commande.module';
import { PaiementModule } from './paiement/paiement.module';
import { AdresseModule } from './adresse/adresse.module';
import { PanierModule } from './panier/panier.module';
import { ArticlePanierModule } from './article-panier/article-panier.module';

@Module({
  imports: [PrismaModule, UserModule, ProduitModule, CategorieModule, CommandeModule, PaiementModule, AdresseModule, PanierModule, ArticlePanierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
