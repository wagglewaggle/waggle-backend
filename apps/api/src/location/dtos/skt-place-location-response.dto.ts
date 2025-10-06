import { Exclude, Expose } from 'class-transformer';
import { CategoryResponseDto } from '../../category/dtos/category-response.dto';
import { SktPopulationResponseDto } from '../../skt-place/dtos/skt-population-response.dto';
import { Category, SktPlace, SktPopulation } from '@waggle/entity';

export class SktPlaceLocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _categories: Category[];
  @Exclude() private readonly _population: SktPopulation;

  constructor(place: SktPlace) {
    this._idx = place.idx;
    this._name = place.name;
    this._categories = place.categories;
    this._population = place.population;
  }

  @Expose()
  get idx(): number {
    return this._idx;
  }

  @Expose()
  get name(): string {
    return this._name;
  }

  @Expose()
  get categories(): CategoryResponseDto[] {
    return this._categories.map((category) => new CategoryResponseDto(category));
  }

  @Expose()
  get population(): SktPopulationResponseDto {
    return new SktPopulationResponseDto(this._population);
  }
}
