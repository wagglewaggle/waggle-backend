import { IsBoolean, IsOptional, Validate } from 'class-validator';
import { ListFilterQueryDto } from '../common/dtos/requests/common-query.dto';
import { PlacePopulationLevel } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsString } from '../common/validations/common.validation';

export class PlaceListFilterQueryDto extends ListFilterQueryDto {
  @ApiProperty({
    description: '혼잡도 정렬 여부 (1: 내림차순, 0: 오름차순)',
    required: false,
    enum: [0, 1],
    deprecated: true,
  })
  @IsOptional()
  @Transform(({ value }) => value === '1')
  @IsBoolean()
  populationSort?: boolean;

  @ApiProperty({
    description: '혼잡도 수준',
    required: false,
    enum: PlacePopulationLevel,
  })
  @IsOptional()
  @IsEnum(PlacePopulationLevel)
  level?: PlacePopulationLevel;

  @ApiProperty({ description: '카테고리', required: false, example: '쇼핑몰' })
  @IsOptional()
  @Validate(IsString)
  category?: string;
}
