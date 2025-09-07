import { Injectable } from '@nestjs/common';
import { ProvinceRepository } from './province.repository';
import { Province } from '@waggle/entity';

@Injectable()
export class ProvinceService {
  constructor(private readonly provinceRepository: ProvinceRepository) {}

  async getAllProvince(): Promise<Province[]> {
    return this.provinceRepository.getProvinces({});
  }

  async getProvince(idx: number): Promise<Province> {
    const [province] = await this.provinceRepository.getProvinces({ idx });
    return province;
  }
}
