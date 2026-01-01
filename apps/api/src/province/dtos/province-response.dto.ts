import { Province, Place } from '@waggle/entity';
import { Exclude, Expose } from 'class-transformer';

export class ProvinceResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _places: Place[];

  constructor(province: Province) {
    this._idx = province.idx;
    this._name = province.name;
    this._places = province.places;
  }

  @Expose()
  get idx(): number {
    return this._idx;
  }

  @Expose()
  get name(): string {
    return this._name;
  }
}
