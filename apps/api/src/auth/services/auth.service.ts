import { Injectable } from '@nestjs/common';
import { CallbackQueryDto } from '../auth.dto';
import { IAuthCallbackResult } from '../auth.interface';
import { BaseAuthService } from '../base-auth.service';
import { UserService } from '../../user/user.service';
import { UserRoleService } from '../../user-role/user-role.service';
import { UserTokenService } from '../../user-token/user-token.service';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService extends BaseAuthService {
  constructor(
    readonly userService: UserService,
    readonly userRoleService: UserRoleService,
    readonly userTokenService: UserTokenService,
    readonly dataSource: DataSource,
  ) {
    super(userService, userRoleService, userTokenService, dataSource);
  }

  callback(query: CallbackQueryDto): Promise<IAuthCallbackResult> {
    throw new Error('Method not implemented.');
  }
  protected getToken(code: string): Promise<Record<string, any>> {
    throw new Error('Method not implemented.');
  }
  protected getInformation(token: string, type: string): Promise<Record<string, any>> {
    throw new Error('Method not implemented.');
  }
}
