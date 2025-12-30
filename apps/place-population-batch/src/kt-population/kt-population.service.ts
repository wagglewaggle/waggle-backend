import { Injectable } from '@nestjs/common';
import { EntityManager, InsertResult } from 'typeorm';
import { KtPopulationRepository } from './kt-population.repository';
import { KtPopulation } from '@waggle/entity';

@Injectable()
export class KtPopulationService {
  constructor(private readonly ktPopulationRepository: KtPopulationRepository) {}

  async upsertPopulation(population: KtPopulation, manager?: EntityManager): Promise<InsertResult> {
    return this.ktPopulationRepository.upsert(population, manager);
  }
}
