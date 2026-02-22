import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiPath } from './location.constant';
import { LocationResponseDto } from './dtos/responses/location-response.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListResponseDto } from '../common/dtos/responses/common-paging.dto';
import { ApiListResponse } from '../app/utils/swagger.util';
import { GetLocationNameParamDto } from './dtos/requests/location-param-request.dto';

@ApiTags('Location')
@Controller(ApiPath.Root)
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @ApiOperation({ summary: '모든 지역 조회', description: '모든 지역 목록을 조회합니다.' })
  @ApiListResponse(LocationResponseDto)
  async getLocationAll(): Promise<ListResponseDto<LocationResponseDto>> {
    const [locations] = await this.locationService.getLocationAll();
    return new ListResponseDto(locations.map((location) => new LocationResponseDto(location)));
  }

  @Get(ApiPath.GetLocationName)
  @ApiOperation({ summary: '주변 장소 조회', description: '특정 지역의 주변 장소를 조회합니다.' })
  @ApiOkResponse({ type: LocationResponseDto })
  async getNearByLocation(@Param() param: GetLocationNameParamDto): Promise<LocationResponseDto> {
    const result = await this.locationService.getLocationByName(param.name);
    return new LocationResponseDto(result);
  }
}
