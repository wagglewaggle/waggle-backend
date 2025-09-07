import { Exclude, Expose } from 'class-transformer';
import { KtPlaceLocationResponseDto } from './kt-place-location-response.dto';
import { SktPlaceLocationResponseDto } from './skt-place-location-response.dto';
import { KtPlace, SktPlace, Location } from '@waggle/entity';

export class LocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _ktPlaces: KtPlace[];
  @Exclude() private readonly _sktPlaces: SktPlace[];

  constructor(location: Location) {
    this._idx = location.idx;
    this._name = location.name;
    this._ktPlaces = location.ktPlaces;
    this._sktPlaces = location.sktPlaces;
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
  get ktPlaces(): KtPlaceLocationResponseDto[] {
    return this._ktPlaces.map((place) => new KtPlaceLocationResponseDto(place));
  }

  @Expose()
  get sktPlaces(): SktPlaceLocationResponseDto[] {
    return this._sktPlaces.map((place) => new SktPlaceLocationResponseDto(place));
  }
}
