import { Injectable } from '@nestjs/common';
import { EntityManager, InsertResult } from 'typeorm';
import { PlacePopulation } from '@waggle/entity';
import { PlacePopulationRepository } from './place-population.repository';

@Injectable()
export class PlacePopulationService {
  constructor(private readonly placePopulationRepository: PlacePopulationRepository) {}

  async upsertPopulation(population: PlacePopulation, manager?: EntityManager): Promise<InsertResult> {
    return this.placePopulationRepository.upsert(population, manager);
  }
}
