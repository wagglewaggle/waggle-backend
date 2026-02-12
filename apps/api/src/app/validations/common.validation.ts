import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ClientRequestException } from '../exceptions/request.exception';
import ERROR_CODE from '../exceptions/error-code';
import { HttpStatus } from '@nestjs/common';

@ValidatorConstraint({ name: 'isString' })
export class IsString implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (typeof value === 'string') {
      return true;
    }
    throw new ClientRequestException(ERROR_CODE.ERR_0000010, HttpStatus.BAD_REQUEST);
  }
}
