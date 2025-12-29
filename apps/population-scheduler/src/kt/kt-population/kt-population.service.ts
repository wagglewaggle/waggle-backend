import { Injectable } from '@nestjs/common';
import { EntityManager, InsertResult } from 'typeorm';
import { KtPopulationRepository } from './kt-population.repository';
import { KtPopulation } from '@waggle/entity';
import { KtPopulationEntity } from './entity/kt-population.entity';

@Injectable()
export class KtPopulationService {
  constructor(private readonly ktPopulationRepository: KtPopulationRepository) {}

  async addKtPopulation(ktPopulation: KtPopulation, manager?: EntityManager): Promise<KtPopulation> {
    return this.ktPopulationRepository.addKtPopulation(ktPopulation, manager);
  }

  async upsertPopulation(population: KtPopulationEntity, manager?: EntityManager): Promise<InsertResult> {
    return this.ktPopulationRepository.upsert(population, manager);
  }
}
