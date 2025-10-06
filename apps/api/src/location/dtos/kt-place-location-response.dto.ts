import { Exclude, Expose } from 'class-transformer';
import { CategoryResponseDto } from '../../category/dtos/category-response.dto';
import { KtPopulationResponseDto } from '../../kt-place/dtos/kt-population-response.dto';
import { Category, KtPlace, KtPopulation } from '@waggle/entity';

export class KtPlaceLocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _categories: Category[];
  @Exclude() private readonly _population: KtPopulation;

  constructor(place: KtPlace) {
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
  get population(): KtPopulationResponseDto {
    return new KtPopulationResponseDto(this._population);
  }
}
