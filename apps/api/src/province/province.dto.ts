import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetProvinceIdxDto {
  @ApiProperty({ example: 1, description: '지역 idx' })
  @Type(() => Number)
  @IsNumber()
  idx: number;
}
