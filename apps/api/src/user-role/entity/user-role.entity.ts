import { User, UserRole, UserRoleType } from '@waggle/entity';

export class UserRoleEntity extends UserRole {
  readonly idx: number;
  readonly user: User;
  readonly role: UserRoleType;
  readonly createdDate: Date;
  readonly updatedDate: Date;

  constructor({ user, role }) {
    super();
    this.user = user;
    this.role = role;
  }
}
