import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, Validate } from 'class-validator';
import { IsString } from './validations/common.validation';
import { ApiProperty } from '@nestjs/swagger';

export class PlaceIdxParamDto {
  @ApiProperty({ example: 1, description: '장소 idx' })
  @Type(() => Number)
  @IsNumber()
  idx: number;
}

export class ListFilterQueryDto {
  @ApiProperty({ description: '혼잡도 정렬 여부 (true: 내림차순, false: 오름차순)', required: true, default: false })
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  populationSort: boolean;

  @ApiProperty({ description: '카테고리', required: false, example: '쇼핑몰' })
  @IsOptional()
  @Validate(IsString)
  category: string;
}
