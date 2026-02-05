import { Exclude, Expose } from 'class-transformer';
import { CategoryTypeResponseDto } from '../../category/dtos/category-type-response.dto';
import { CctvResponseDto } from '../../cctv/dto/cctv-response.dto';
import { LocationResponseDto } from '../../location/dtos/location-response.dto';
import { Category, Cctv, Place, PlaceAccident, PlacePopulation, PlaceRoadTraffic, Location } from '@waggle/entity';
import { PlacePopulationResponseDto } from './place-population-response.dto';
import { PlaceAccidentResponseDto } from './place-accident-response.dto';
import { PlaceRoadTrafficResponseDto } from './place-road-traffic-response.dto';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ example: 1, description: '장소 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '강남 MICE 관광특구', description: '장소 이름' })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({ example: 37.5109513663511, description: 'x좌표' })
  @Expose()
  get x(): number {
    return this._x;
  }

  @ApiProperty({ example: 127.060167789459, description: 'y좌표' })
  @Expose()
  get y(): number {
    return this._y;
  }

  @ApiProperty({ type: [CategoryTypeResponseDto], description: '카테고리 목록', required: false })
  @Expose()
  get categories(): CategoryTypeResponseDto[] | undefined {
    if (!this._categories) {
      return undefined;
    }
    return this._categories.map((category) => new CategoryTypeResponseDto(category.type));
  }

  @ApiProperty({ type: PlacePopulationResponseDto, description: '인구 정보', required: false })
  @Expose()
  get population(): PlacePopulationResponseDto | undefined {
    if (!this._population) {
      return undefined;
    }
    return new PlacePopulationResponseDto(this._population);
  }

  @ApiProperty({ type: [PlaceAccidentResponseDto], description: '사고 정보', required: false })
  @Expose()
  get accidents(): PlaceAccidentResponseDto[] | undefined {
    if (!this._accidents) {
      return undefined;
    }
    return this._accidents.map((accident) => new PlaceAccidentResponseDto(accident));
  }

  @ApiProperty({ type: [CctvResponseDto], description: 'CCTV 정보', required: false })
  @Expose()
  get cctvs(): CctvResponseDto[] | undefined {
    if (!this._cctvs) {
      return undefined;
    }
    return this._cctvs.map((cctv) => new CctvResponseDto(cctv));
  }

  @ApiProperty({ type: PlaceRoadTrafficResponseDto, description: '도로 교통 정보', required: false })
  @Expose()
  get roadTraffic(): PlaceRoadTrafficResponseDto | undefined {
    if (!this._roadTraffic) {
      return undefined;
    }
    return new PlaceRoadTrafficResponseDto(this._roadTraffic);
  }

  @ApiProperty({ type: LocationResponseDto, description: '주변 지역 정보', required: false })
  @Expose()
  get locations(): LocationResponseDto | undefined {
    if (!this._location) {
      return undefined;
    }
    return new LocationResponseDto(this._location);
  }
}
