import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, Validate } from 'class-validator';
import { IsCategoryType } from '../app/validations/common.validation';
import { PopulationLevel } from './place.constant';
import { CategoryType } from '@waggle/entity';

export class PlaceListFilterQueryDto {
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  populationSort: boolean;

  @IsOptional()
  @Validate(IsCategoryType)
  category: CategoryType;

  level?: PopulationLevel;
}
