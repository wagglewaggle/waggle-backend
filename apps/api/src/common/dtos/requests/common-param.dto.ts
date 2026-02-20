import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PlaceIdxParamDto {
  @ApiProperty({ example: 1, description: '장소 idx' })
  @Type(() => Number)
  @IsNumber()
  idx: number;
}
