import { Exclude, Expose } from 'class-transformer';
import { CategoryTypeResponseDto } from '../../../category/dtos/responses/category-type-response.dto';
import { Category, Place, PlacePopulation } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { PlacePopulationResponseDto } from '../../../place/dtos/responses/place-population-response.dto';

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

  @ApiProperty({ example: 1, description: '장소 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '롯데월드', description: '장소 이름' })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({ type: [CategoryTypeResponseDto], description: '장소 카테고리' })
  @Expose()
  get categories(): CategoryTypeResponseDto[] {
    return this._categories.map((category) => new CategoryTypeResponseDto(category.type));
  }

  @ApiProperty({ type: PlacePopulationResponseDto, description: '장소 인구 정보', nullable: true })
  @Expose()
  get population(): PlacePopulationResponseDto | null {
    if (this._population) {
      return new PlacePopulationResponseDto(this._population);
    }
    return null;
  }
}
