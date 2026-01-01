import { Exclude, Expose } from 'class-transformer';
import { CategoryTypeResponseDto } from '../../category/dtos/category-type-response.dto';
import { CctvResponseDto } from '../../cctv/dto/cctv-response.dto';
import { LocationResponseDto } from '../../location/dtos/location-response.dto';
import { Category, Cctv, Place, PlaceAccident, PlacePopulation, PlaceRoadTraffic, Location } from '@waggle/entity';
import { PlacePopulationResponseDto } from './place-population-response.dto';
import { PlaceAccidentResponseDto } from './place-accident-response.dto';
import { PlaceRoadTrafficResponseDto } from './place-road-traffic-response.dto';

export class PlaceResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _x: number;
  @Exclude() private readonly _y: number;
  @Exclude() private readonly _categories: Category[] | undefined;
  @Exclude() private readonly _population: PlacePopulation | undefined;
  @Exclude() private readonly _accidents: PlaceAccident[] | undefined;
  @Exclude() private readonly _cctvs: Cctv[] | undefined;
  @Exclude() private readonly _roadTraffic: PlaceRoadTraffic | undefined;
  @Exclude() private readonly _location: Location | undefined;

  constructor(place: Place, location?: Location) {
    this._idx = place.idx;
    this._name = place.name;
    this._x = place.x;
    this._y = place.y;
    this._categories = place.categories;
    this._population = place.population;
    this._accidents = place.accidents;
    this._cctvs = place.cctvs;
    this._roadTraffic = place.roadTraffic;
    this._location = location;
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
  get x(): number {
    return this._x;
  }

  @Expose()
  get y(): number {
    return this._y;
  }

  @Expose()
  get categories(): CategoryTypeResponseDto[] | undefined {
    if (!this._categories) {
      return undefined;
    }
    return this._categories.map((category) => new CategoryTypeResponseDto(category.type));
  }

  @Expose()
  get population(): PlacePopulationResponseDto | undefined {
    if (!this._population) {
      return undefined;
    }
    return new PlacePopulationResponseDto(this._population);
  }

  @Expose()
  get accidents(): PlaceAccidentResponseDto[] | undefined {
    if (!this._accidents) {
      return undefined;
    }
    return this._accidents.map((accident) => new PlaceAccidentResponseDto(accident));
  }

  @Expose()
  get cctvs(): CctvResponseDto[] | undefined {
    if (!this._cctvs) {
      return undefined;
    }
    return this._cctvs.map((cctv) => new CctvResponseDto(cctv));
  }

  @Expose()
  get roadTraffic(): PlaceRoadTrafficResponseDto | undefined {
    if (!this._roadTraffic) {
      return undefined;
    }
    return new PlaceRoadTrafficResponseDto(this._roadTraffic);
  }

  @Expose()
  get locations(): LocationResponseDto | undefined {
    if (!this._location) {
      return undefined;
    }
    return new LocationResponseDto(this._location);
  }
}
