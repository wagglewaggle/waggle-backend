import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, Validate } from 'class-validator';
import { IsNumber } from '../../validations/common.validation';

export class ListFilterQueryDto {
  @ApiProperty({ description: '조회 오프셋', required: false, example: 0 })
  @IsOptional()
  @Type(() => Number)
  @Validate(IsNumber)
  offset?: number;

  @ApiProperty({ description: '조회 개수', required: false, example: 10, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @Validate(IsNumber)
  limit?: number = 10;
}
