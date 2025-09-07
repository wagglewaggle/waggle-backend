import { KtPlace, SktPlace, Province } from '@waggle/entity';
import { Exclude, Expose } from 'class-transformer';

export class ProvinceResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _ktPlace: KtPlace[];
  @Exclude() private readonly _sktPlace: SktPlace[];

  constructor(province: Province) {
    this._idx = province.idx;
    this._name = province.name;
    this._ktPlace = province.ktPlaces;
    this._sktPlace = province.sktPlaces;
  }

  @Expose()
  get idx(): number {
    return this._idx;
  }

  @Expose()
  get name(): string {
    return this._name;
  }

  // @Expose()
  // get ktPlace():
}
