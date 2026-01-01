import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location, Place, PlaceStatus } from '@waggle/entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class LocationRepository {
  constructor(@InjectRepository(Location) private readonly repository: Repository<Location>) {}

  async getLocationAll(): Promise<[Location[], number]> {
    return this.repository.findAndCount();
  }

  async getLocation(where: FindOptionsWhere<Location>, relation?: string[]): Promise<Location> {
    const options: any = { where };
    if (Array.isArray(relation)) {
      options.relations = relation;
    }
    return this.repository.findOne(options);
  }

  async getNearByLocation(name: string, duplicatePlace?: Place): Promise<Location> {
    const queryBuilder = this.repository
      .createQueryBuilder('location')
      .leftJoinAndSelect('location.places', 'place', 'place.status = :placeStatus', { placeStatus: PlaceStatus.Activated })
      .leftJoinAndSelect('place.population', 'placePopulation')
      .leftJoinAndSelect('place.categories', 'placeCategories')
      .leftJoinAndSelect('placeCategories.type', 'placeCategoryType')
      .where('location.name = :name', { name });

    if (duplicatePlace) {
      queryBuilder.andWhere('place.idx != :idx', { idx: duplicatePlace.idx });
    }

    const result = await queryBuilder.getOne();
    if (result) {
      return result;
    }
    return undefined;
  }
}
