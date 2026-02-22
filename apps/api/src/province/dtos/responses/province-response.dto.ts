import { Province, Place } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PlaceResponseDto } from '../../../place/dtos/responses/place-response.dto';

export class ProvinceResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _places?: Place[];

  constructor(province: Province) {
    this._idx = province.idx;
    this._name = province.name;
    this._places = province.places;
  }

  @ApiProperty({ example: 1, description: '광역시 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '서울', description: '광역시 이름' })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({ type: [PlaceResponseDto], required: false, description: '장소 목록' })
  @Expose()
  get places(): PlaceResponseDto[] | undefined {
    if (this._places) {
      return this._places.map((place) => new PlaceResponseDto(place));
    }
    return undefined;
  }
}
