import { Validate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from '../common/validations/common.validation';

export class GetProvinceIdxDto {
  @ApiProperty({ example: 1, description: '지역 idx' })
  @Type(() => Number)
  @Validate(IsNumber)
  idx: number;
}
