import { Place, PlaceRoadTraffic } from '@waggle/entity';
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

  @Expose()
  get idx(): number {
    return this._idx;
  }

  @Expose()
  get type(): string {
    return this._type;
  }

  @Expose()
  get info(): string {
    return this._info;
  }

  @Expose()
  get avgSpeed(): number {
    return this._avgSpeed;
  }
}
