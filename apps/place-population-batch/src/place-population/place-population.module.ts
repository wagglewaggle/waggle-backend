import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacePopulation } from '@waggle/entity';
import { PlacePopulationRepository } from './place-population.repository';
import { PlacePopulationService } from './place-population.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlacePopulation])],
  providers: [PlacePopulationService, PlacePopulationRepository],
  exports: [TypeOrmModule, PlacePopulationService],
})
export class PlacePopulationModule {}
