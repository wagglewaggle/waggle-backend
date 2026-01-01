import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacePopulation } from '@waggle/entity';
import { EntityManager, InsertResult, Repository } from 'typeorm';

@Injectable()
export class PlacePopulationRepository {
  constructor(
    @InjectRepository(PlacePopulation)
    private readonly repository: Repository<PlacePopulation>,
  ) {}

  async upsert(population: PlacePopulation, manager?: EntityManager): Promise<InsertResult> {
    const query =
      'INSERT INTO place_population' +
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

    if (manager) {
      return manager.query(query, values);
    }
    return this.repository.query(query, values);
  }
}
