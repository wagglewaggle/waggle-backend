import { IsEnum, IsOptional } from 'class-validator';
import { ListFilterQueryDto } from '../app/app.dto';
import { SktPopulationLevel } from '@waggle/entity';

export class SktPlaceListFilterQueryDto extends ListFilterQueryDto {
  @IsOptional()
  @IsEnum(SktPopulationLevel)
  level: SktPopulationLevel;
}
