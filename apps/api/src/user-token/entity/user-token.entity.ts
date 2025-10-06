import { User, UserToken, UserTokenStatus } from '@waggle/entity';

export class UserTokenEntity extends UserToken {
  readonly idx: number;
  readonly token: string;
  readonly status: UserTokenStatus;
  readonly createdDate: Date;
  readonly expiredDate: Date;
  readonly user: User;

  constructor(userToken: UserToken) {
    super();
    Object.assign(this, userToken);
  }

  isActivated(): boolean {
    return this.status === UserTokenStatus.Activated;
  }
}
