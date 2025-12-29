import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KtPopulation } from '@waggle/entity';
import { EntityManager, InsertResult, Repository } from 'typeorm';
import { KtPopulationEntity } from './entity/kt-population.entity';

@Injectable()
export class KtPopulationRepository {
  constructor(
    @InjectRepository(KtPopulation)
    private readonly repository: Repository<KtPopulation>,
  ) {}

  async addKtPopulation(ktPopulation: KtPopulation, manager?: EntityManager): Promise<KtPopulation> {
    if (manager) {
      return manager.save(KtPopulation, ktPopulation);
    }
    return this.repository.save(ktPopulation);
  }

  async upsert(population: KtPopulationEntity, manager: EntityManager): Promise<InsertResult> {
    const query =
      'INSERT INTO kt_population' +
      '(placeIdx, level, message, ' +
      'male, female, zeroGen, teenager, twenties, thirties, forties, fifties, sixties, seventies, resident, nonResident) ' +
      'VALUES' +
      '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) AS overwrite ' +
      'ON DUPLICATE KEY UPDATE ' +
      'level = overwrite.level, message = overwrite.message, ' +
      'male = overwrite.male, female = overwrite.female, zeroGen = overwrite.zeroGen, teenager = overwrite.teenager, twenties = overwrite.twenties, thirties = overwrite.thirties, forties = overwrite.forties, fifties = overwrite.fifties, sixties = overwrite.sixties, seventies = overwrite.seventies, resident = overwrite.resident, nonResident = overwrite.nonResident';

    const values = [
      population.place.idx,
      population.level,
      population.message,
      population.male,
      population.female,
      population.zeroGen,
      population.teenager,
      population.twenties,
      population.thirties,
      population.forties,
      population.fifties,
      population.sixties,
      population.seventies,
      population.resident,
      population.nonResident,
    ];

    return manager.query(query, values);
  }
}
