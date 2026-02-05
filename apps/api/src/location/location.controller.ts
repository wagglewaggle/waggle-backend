import { Controller, Get, Param } from '@nestjs/common';
import { Location } from '@waggle/entity';
import { GetLocationNameParamDto } from './location.dto';
import { LocationService } from './location.service';
import { ApiPath } from './location.constant';
import { LocationResponseDto } from './dtos/location-response.dto';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { IListCountResponse } from '../app/interfaces/common.interface';
import { ApiListCountResponse } from '../app/utils/swagger.util';

@ApiTags('Location')
@Controller(ApiPath.Root)
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @ApiOperation({ summary: '모든 지역 조회', description: '모든 지역 목록을 조회합니다.' })
  @ApiListCountResponse(LocationResponseDto)
  async getLocationAll(): Promise<IListCountResponse<LocationResponseDto>> {
    const [locations, count] = await this.locationService.getLocationAll();
    return { list: locations.map((location) => new LocationResponseDto(location)), count };
  }

  @Get(ApiPath.GetLocationName)
  @ApiOperation({ summary: '주변 장소 조회', description: '특정 지역의 주변 장소를 조회합니다.' })
  @ApiOkResponse({ type: LocationResponseDto })
  async getNearByLocation(@Param() param: GetLocationNameParamDto): Promise<LocationResponseDto> {
    const result = await this.locationService.getLocationByName(param.name);
    return new LocationResponseDto(result);
  }
}
