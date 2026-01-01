import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaceService } from './place.service';
import { IListCountResponse } from '../app/interfaces/common.interface';
import { PlaceListFilterQueryDto } from './place.dto';
import { PlaceResponseDto } from './dtos/place-response.dto';
import { ApiPath } from './place.constant';
import { PlaceIdxParamDto } from '../app/app.dto';

@Controller(ApiPath.Root)
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async getPlaces(@Query() query: PlaceListFilterQueryDto): Promise<IListCountResponse<PlaceResponseDto>> {
    const [places, count] = await this.placeService.getActivatedPlaces(query);
    return { list: places.map((place) => new PlaceResponseDto(place)), count };
  }

  @Get(ApiPath.GetPlaceIdx)
  async getPlace(@Param() param: PlaceIdxParamDto): Promise<PlaceResponseDto> {
    const result = await this.placeService.getPlaceAllInfo(param.idx);
    if (Array.isArray(result)) {
      const [place, location] = result;
      return new PlaceResponseDto(place, location);
    }
    return new PlaceResponseDto(result);
  }
}
