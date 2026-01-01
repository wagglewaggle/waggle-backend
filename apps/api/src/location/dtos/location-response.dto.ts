import { Exclude, Expose } from 'class-transformer';
import { Location, Place } from '@waggle/entity';
import { PlaceLocationResponseDto } from './place-location-response.dto';

export class LocationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _places: Place[];

  constructor(location: Location) {
    this._idx = location.idx;
    this._name = location.name;
    this._places = location.places;
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
  get places(): PlaceLocationResponseDto[] {
    return this._places.map((place) => new PlaceLocationResponseDto(place));
  }
}
