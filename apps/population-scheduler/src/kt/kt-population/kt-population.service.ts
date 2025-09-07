import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { KtPopulationRepository } from './kt-population.repository';
import { KtPopulation } from '@waggle/entity';

@Injectable()
export class KtPopulationService {
  constructor(private readonly ktPopulationRepository: KtPopulationRepository) {}

  async addKtPopulation(ktPopulation: KtPopulation, manager?: EntityManager): Promise<KtPopulation> {
    return this.ktPopulationRepository.addKtPopulation(ktPopulation, manager);
  }
}
