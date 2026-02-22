import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaceService } from './place.service';
import { ListPagingResponseDto } from '../common/dtos/responses/common-paging.dto';
import { ApiPath } from './place.constant';
import { PlaceIdxParamDto } from '../common/dtos/requests/common-param.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiListPagingResponse } from '../app/utils/swagger.util';
import { PlaceResponseDto } from './dtos/responses/place-response.dto';
import { PlaceListFilterQueryDto } from './dtos/requests/place-query-request.dto';

@ApiTags('Place')
@Controller(ApiPath.Root)
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  @ApiOperation({ summary: '모든 장소 조회', description: '필터링을 통해 모든 장소를 조회합니다.' })
  @ApiListPagingResponse(PlaceResponseDto)
  async getPlaces(@Query() query: PlaceListFilterQueryDto): Promise<ListPagingResponseDto<PlaceResponseDto>> {
    const [places, total] = await this.placeService.getActivatedPlaces(query);
    return new ListPagingResponseDto(
      places.map((place) => new PlaceResponseDto(place)),
      total,
      query.offset,
      query.limit,
    );
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
