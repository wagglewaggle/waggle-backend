import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { SktPopulationRepository } from './skt-population.repository';
import { SktPopulation, SktPlace } from '@waggle/entity';

@Injectable()
export class SktPopulationService {
  constructor(private readonly sktPopulationRepository: SktPopulationRepository) {}

  async addSktPopulation(sktPopulation: SktPopulation, manager?: EntityManager): Promise<SktPopulation> {
    return this.sktPopulationRepository.addSktPopulation(sktPopulation, manager);
  }

  async getSktPopulation(place: SktPlace): Promise<SktPopulation> {
    return (await this.sktPopulationRepository.getSktPopulation({ place }, ['place']))[0];
  }
}
