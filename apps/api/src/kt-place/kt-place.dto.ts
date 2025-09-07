import { IsEnum, IsOptional } from 'class-validator';
import { ListFilterQueryDto } from '../app/app.dto';
import { KtPopulationLevel } from '@waggle/entity';

export class KtPlaceListFilterQueryDto extends ListFilterQueryDto {
  @IsOptional()
  @IsEnum(KtPopulationLevel)
  level: KtPopulationLevel;
}
