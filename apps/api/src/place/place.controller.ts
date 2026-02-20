import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaceService } from './place.service';
import { ListPagingResponse } from '../app/interfaces/common.interface';
import { PlaceListFilterQueryDto } from './place.dto';
import { PlaceResponseDto } from './dtos/place-response.dto';
import { ApiPath } from './place.constant';
import { PlaceIdxParamDto } from '../app/app.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiListPagingResponse } from '../app/utils/swagger.util';

@ApiTags('Place')
@Controller(ApiPath.Root)
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  @ApiOperation({ summary: '모든 장소 조회', description: '필터링을 통해 모든 장소를 조회합니다.' })
  @ApiListPagingResponse(PlaceResponseDto)
  async getPlaces(@Query() query: PlaceListFilterQueryDto): Promise<ListPagingResponse<PlaceResponseDto>> {
    const [places, total] = await this.placeService.getActivatedPlaces(query);
    return {
      list: places.map((place) => new PlaceResponseDto(place)),
      total,
      offset: query.offset || 0,
      limit: query.limit || 0,
    };
  }

  @Get(ApiPath.GetPlaceIdx)
  @ApiOperation({ summary: '특정 장소 조회', description: '특정 장소의 상세 정보를 조회합니다.' })
  @ApiOkResponse({ type: PlaceResponseDto })
  async getPlace(@Param() param: PlaceIdxParamDto): Promise<PlaceResponseDto> {
    const result = await this.placeService.getPlaceAllInfo(param.idx);
    if (Array.isArray(result)) {
      const [place, location] = result;
      return new PlaceResponseDto(place, location);
    }
    return new PlaceResponseDto(result);
  }
}
