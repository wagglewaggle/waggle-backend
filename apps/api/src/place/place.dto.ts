import { IsEnum, IsOptional } from 'class-validator';
import { ListFilterQueryDto } from '../app/app.dto';
import { PlacePopulationLevel } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';

export class PlaceListFilterQueryDto extends ListFilterQueryDto {
  @ApiProperty({
    description: '혼잡도 수준',
    required: false,
    enum: PlacePopulationLevel,
    example: PlacePopulationLevel.Normal,
  })
  @IsOptional()
  @IsEnum(PlacePopulationLevel)
  level: PlacePopulationLevel;
}
