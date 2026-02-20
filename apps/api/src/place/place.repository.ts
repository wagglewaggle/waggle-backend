import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, Place, PlaceStatus } from '@waggle/entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { PlaceListFilterQueryDto } from './place.dto';

@Injectable()
export class PlaceRepository {
  constructor(@InjectRepository(Place) private readonly repository: Repository<Place>) {}

  createQueryBuilder(alias = 'place') {
    return this.repository.createQueryBuilder(alias);
  }

  async getPlace(where: FindOptionsWhere<Place>, relation?: string[]): Promise<Place[]> {
    const options: any = { where };
    if (Array.isArray(relation)) {
      options.relations = relation;
    }
    return this.repository.find(options);
  }

  async getActivatedPlaces(query: PlaceListFilterQueryDto): Promise<[Place[], number]> {
    const queryBuilder = this.createQueryBuilder()
      .leftJoinAndSelect('place.population', 'population')
      .leftJoinAndSelect('place.categories', 'category')
      .leftJoinAndSelect('category.type', 'categoryType')
      .where('place.status = :status', { status: PlaceStatus.Activated });

    if (query.limit) {
      queryBuilder.take(query.limit);
    }
    if (query.offset) {
      queryBuilder.skip(query.offset);
    }

    if (query.level) {
      queryBuilder.andWhere('population.level = :level', { level: query.level });
    }

    if (query.category) {
      queryBuilder
        .andWhere((qb) => {
          const subQuery = qb
            .subQuery()
            .select('category.placeIdx')
            .from(Category, 'category')
            .leftJoin('category.type', 'categoryType')
            .where('categoryType.type = :type')
            .andWhere('category.placeIdx IS NOT NULL')
            .getQuery();
          return 'category.placeIdx IN ' + subQuery;
        })
        .setParameters({ type: query.category });
    }

    if (query.populationSort) {
      queryBuilder.orderBy('population.level', 'DESC');
    } else {
      queryBuilder.orderBy('population.level', 'ASC');
    }

    const [places, count] = await queryBuilder.getManyAndCount();
    return [places, count];
  }
}
