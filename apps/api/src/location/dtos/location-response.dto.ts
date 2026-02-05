import { Exclude, Expose } from 'class-transformer';
import { Location, Place } from '@waggle/entity';
import { PlaceLocationResponseDto } from './place-location-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _places?: Place[];

  constructor(location: Location) {
    this._idx = location.idx;
    this._name = location.name;
    this._places = location.places;
  }

  @ApiProperty({ example: 1, description: '지역 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '송파구', description: '지역 이름' })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({ type: [PlaceLocationResponseDto], required: false, description: '장소 목록' })
  @Expose()
  get places(): PlaceLocationResponseDto[] | undefined {
    if (this._places) {
      return this._places.map((place) => new PlaceLocationResponseDto(place));
    }
    return undefined;
  }
}
