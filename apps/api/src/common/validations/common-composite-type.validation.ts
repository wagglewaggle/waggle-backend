import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ClientRequestException } from '../../app/errors/request.exception';
import { ErrorCode } from '../../app/errors/error-code';
import { HttpStatus } from '@nestjs/common';

@ValidatorConstraint({ name: 'isStringNumber' })
export class IsStringNumber implements ValidatorConstraintInterface {
  private readonly NUMBER_RULE = /^[0-9]*$/;

  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const property = validationArguments?.property;

    if (!value) {
      throw new ClientRequestException(ErrorCode.ERR_0000009, HttpStatus.BAD_REQUEST, {
        value: property,
      });
    }

    console.log(value);

    if (typeof value === 'string' && this.NUMBER_RULE.test(value)) {
      return true;
    }

    throw new ClientRequestException(ErrorCode.ERR_0010001, HttpStatus.BAD_REQUEST, { value: property });
  }
}
