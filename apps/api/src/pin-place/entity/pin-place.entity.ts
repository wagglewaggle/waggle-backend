import { KtPlace, PinPlace, SktPlace, User } from '@waggle/entity';

export class PinPlaceEntity extends PinPlace {
  readonly idx: number;
  readonly user: User;
  readonly sktPlace: SktPlace;
  readonly ktPlace: KtPlace;
  readonly createdDate: Date;

  constructor(pinPlace: PinPlace) {
    super();
    this.idx = pinPlace.idx;
    this.user = pinPlace.user;
    this.sktPlace = pinPlace.sktPlace;
    this.ktPlace = pinPlace.ktPlace;
    this.createdDate = pinPlace.createdDate;
  }
}
