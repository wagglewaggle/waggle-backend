import { IsEnum, IsOptional } from 'class-validator';
import { ListFilterQueryDto } from '../app/app.dto';
import { PlacePopulationLevel } from '@waggle/entity';

export class PlaceListFilterQueryDto extends ListFilterQueryDto {
  @IsOptional()
  @IsEnum(PlacePopulationLevel)
  level: PlacePopulationLevel;
}
