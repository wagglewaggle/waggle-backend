import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KtPopulationRepository } from './kt-population.repository';
import { KtPopulationService } from './kt-population.service';
import { KtPopulation } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([KtPopulation])],
  providers: [KtPopulationService, KtPopulationRepository],
  exports: [TypeOrmModule, KtPopulationService],
})
export class KtPopulationModule {}
