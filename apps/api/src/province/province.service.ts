import { HttpStatus, Injectable } from '@nestjs/common';
import { ProvinceRepository } from './province.repository';
import { Province } from '@waggle/entity';
import { ClientRequestException } from '../app/errors/request.exception';
import { ErrorCode } from '../app/errors/error-code';

@Injectable()
export class ProvinceService {
  constructor(private readonly provinceRepository: ProvinceRepository) {}

  async getAllProvince(): Promise<Province[]> {
    return this.provinceRepository.getProvinces({});
  }

  async getProvince(idx: number): Promise<Province> {
    const [province] = await this.provinceRepository.getProvinces({ idx });
    if (!province) {
      throw new ClientRequestException(ErrorCode.ERR_0030001, HttpStatus.NOT_FOUND);
    }
    return province;
  }
}
