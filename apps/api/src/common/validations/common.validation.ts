import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ClientRequestException } from '../../app/errors/request.exception';
import { ErrorCode } from '../../app/errors/error-code';
import { HttpStatus } from '@nestjs/common';

@ValidatorConstraint({ name: 'isString' })
export class IsString implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const property = validationArguments?.property;

    if (!value) {
      throw new ClientRequestException(ErrorCode.ERR_0000009, HttpStatus.BAD_REQUEST, {
        value: property,
      });
    }

    if (typeof value === 'string') {
      return true;
    }

    throw new ClientRequestException(ErrorCode.ERR_0010002, HttpStatus.BAD_REQUEST, { value: property });
  }
}

@ValidatorConstraint({ name: 'isNumber' })
export class IsNumber implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const property = validationArguments?.property;

    if (!value) {
      throw new ClientRequestException(ErrorCode.ERR_0000009, HttpStatus.BAD_REQUEST, {
        value: property,
      });
    }

    if (typeof value === 'number') {
      return true;
    }

    throw new ClientRequestException(ErrorCode.ERR_0010001, HttpStatus.BAD_REQUEST, { value: property });
  }
}

@ValidatorConstraint({ name: 'isEnumConstraint' })
export class IsEnumConstraint implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const property = validationArguments?.property;
    const [entity] = validationArguments?.constraints || [];

    if (!value) {
      throw new ClientRequestException(ErrorCode.ERR_0000009, HttpStatus.BAD_REQUEST, {
        value: property,
      });
    }

    const validValues = Object.values(entity);
    if (validValues.includes(value)) {
      return true;
    }

    throw new ClientRequestException(ErrorCode.ERR_0010003, HttpStatus.BAD_REQUEST, {
      value: property,
      allowedValues: validValues,
    });
  }
}

export function IsEnum(entity: object, validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [entity],
      validator: IsEnumConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isDatetime' })
export class IsDatetime implements ValidatorConstraintInterface {
  private readonly DATETIME_RULE = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const property = validationArguments?.property;

    if (!value) {
      throw new ClientRequestException(ErrorCode.ERR_0000009, HttpStatus.BAD_REQUEST, {
        value: property,
      });
    }

    if (typeof value === 'string' && this.DATETIME_RULE.test(value)) {
      // 실제 유효한 날짜인지 검사 (예: 2024-02-30 방지)
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return true;
      }
    }

    throw new ClientRequestException(ErrorCode.ERR_0010004, HttpStatus.BAD_REQUEST, {
      value: property,
      message: 'YYYY-MM-DD HH:mm:ss 형식이어야 합니다.',
    });
  }
}
