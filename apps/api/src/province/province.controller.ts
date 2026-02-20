import { Controller, Get, Param } from '@nestjs/common';
import { GetProvinceIdxDto } from './province.dto';
import { ProvinceService } from './province.service';
import { ApiPath } from './province.constant';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProvinceResponseDto } from './dtos/province-response.dto';
import { ListResponseDto } from '../common/dtos/responses/common-paging.dto';
import { ApiListResponse } from '../app/utils/swagger.util';

@ApiTags('Province')
@Controller(ApiPath.Root)
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get()
  @ApiOperation({ summary: '모든 광역시 조회', description: '모든 광역시 목록을 조회합니다.' })
  @ApiListResponse(ProvinceResponseDto)
  async getAllProvinces(): Promise<ListResponseDto<ProvinceResponseDto>> {
    const provinces = await this.provinceService.getAllProvince();
    return new ListResponseDto(provinces.map((province) => new ProvinceResponseDto(province)));
  }

  @Get(ApiPath.GetProvinceIdx)
  @ApiOperation({ summary: '특정 광역시 조회', description: '특정 광역시의 상세 정보를 조회합니다.' })
  @ApiOkResponse({ type: ProvinceResponseDto })
  async getProvince(@Param() param: GetProvinceIdxDto): Promise<ProvinceResponseDto> {
    const province = await this.provinceService.getProvince(param.idx);
    return new ProvinceResponseDto(province);
  }
}
