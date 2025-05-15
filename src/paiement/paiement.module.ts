import { Module } from '@nestjs/common';
import { PaiementController } from './paiement.controller';
import { PaiementService } from './paiement.service';

@Module({
  controllers: [PaiementController],
  providers: [PaiementService]
})
export class PaiementModule {}
