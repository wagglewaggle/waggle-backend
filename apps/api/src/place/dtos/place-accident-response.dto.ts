import { Place, PlaceAccident } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class PlaceAccidentResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _type: string;
  @Exclude() private readonly _dtype: string;
  @Exclude() private readonly _info: string;
  @Exclude() private readonly _x: number;
  @Exclude() private readonly _y: number;
  @Exclude() private readonly _place: Place;
  @Exclude() private readonly _createdDate: Date;
  @Exclude() private readonly _updatedDate: Date;

  constructor(accident: PlaceAccident) {
    this._idx = accident.idx;
    this._type = accident.type;
    this._dtype = accident.dtype;
    this._info = accident.info;
    this._x = accident.x;
    this._y = accident.y;
    this._place = accident.place;
    this._createdDate = accident.createdDate;
    this._updatedDate = accident.updatedDate;
  }

  @ApiProperty({ example: 1, description: '사고 정보 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '공사', description: '사고 유형' })
  @Expose()
  get type(): string {
    return this._type;
  }

  @ApiProperty({ example: '도로 Maint. 공사', description: '사고 세부 유형' })
  @Expose()
  get dtype(): string {
    return this._dtype;
  }

  @ApiProperty({ example: '월드컵북로(상암초교) → 월드컵북로(상암DMC)', description: '사고 정보' })
  @Expose()
  get info(): string {
    return this._info;
  }

  @ApiProperty({ example: 37.5819, description: 'x좌표' })
  @Expose()
  get x(): number {
    return this._x;
  }

  @ApiProperty({ example: 126.894, description: 'y좌표' })
  @Expose()
  get y(): number {
    return this._y;
  }

  @ApiProperty({ description: '생성 날짜' })
  @Expose()
  get createdDate(): Date {
    return this._createdDate;
  }

  @ApiProperty({ description: '업데이트 날짜' })
  @Expose()
  get updatedDate(): Date {
    return this._updatedDate;
  }
}
