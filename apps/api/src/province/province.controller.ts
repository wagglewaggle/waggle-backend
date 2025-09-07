import { Controller, Get, Param } from '@nestjs/common';
import { GetProvinceIdxDto } from './province.dto';
import { ProvinceService } from './province.service';
import { ApiPath } from './province.constant';
import { Province } from '@waggle/entity';

@Controller(ApiPath.Root)
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get()
  async getAllProvinces(): Promise<Province[]> {
    return await this.provinceService.getAllProvince();
  }

  @Get(ApiPath.GetProvinceIdx)
  async getProvince(@Param() param: GetProvinceIdxDto) {
    return await this.provinceService.getProvince(param.idx);
  }
}
