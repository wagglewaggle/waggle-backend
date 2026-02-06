import { Place, PlaceRoadTraffic } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class PlaceRoadTrafficResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _info: string;
  @Exclude() private readonly _type: string;
  @Exclude() private readonly _avgSpeed: number;
  @Exclude() private readonly _place: Place;

  constructor(roadTraffic: PlaceRoadTraffic) {
    this._idx = roadTraffic.idx;
    this._info = roadTraffic.info;
    this._type = roadTraffic.type;
    this._avgSpeed = roadTraffic.avgSpeed;
    this._place = roadTraffic.place;
  }

  @ApiProperty({ example: 1, description: '도로 소통 현황 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '원활', description: '도로 소통 현황' })
  @Expose()
  get type(): string {
    return this._type;
  }

  @ApiProperty({ example: '해당 장소로 이동·진입하는 도로가 크게 막히지 않아요.', description: '도로 소통 현황 상세 정보' })
  @Expose()
  get info(): string {
    return this._info;
  }

  @ApiProperty({ example: 42, description: '평균 속도' })
  @Expose()
  get avgSpeed(): number {
    return this._avgSpeed;
  }
}
