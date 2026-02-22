import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Validate } from 'class-validator';
import { IsNumber } from '../../validations/common.validation';

export class PlaceIdxParamDto {
  @ApiProperty({ example: 1, description: '장소 idx' })
  @Type(() => Number)
  @Validate(IsNumber)
  idx: number;
}
