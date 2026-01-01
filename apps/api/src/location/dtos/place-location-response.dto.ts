import { Exclude, Expose } from 'class-transformer';
import { CategoryTypeResponseDto } from '../../category/dtos/category-type-response.dto';
import { Category, Place, PlacePopulation } from '@waggle/entity';
import { PlacePopulationResponseDto } from '../../place/dtos/place-population-response.dto';

export class PlaceLocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _categories: Category[];
  @Exclude() private readonly _population?: PlacePopulation;

  constructor(place: Place) {
    this._idx = place.idx;
    this._name = place.name;
    this._categories = place.categories;
    this._population = place?.population;
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
  get categories(): CategoryTypeResponseDto[] {
    return this._categories.map((category) => new CategoryTypeResponseDto(category.type));
  }

  @Expose()
  get population(): PlacePopulationResponseDto | null {
    if (this._population) {
      return new PlacePopulationResponseDto(this._population);
    }
    return null;
  }
}
