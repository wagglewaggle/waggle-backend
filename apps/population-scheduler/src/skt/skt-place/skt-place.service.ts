import { Injectable } from '@nestjs/common';
import { SktPlaceRepository } from './skt-place.repository';
import { SktPlace, SktPlaceStatus } from '@waggle/entity';

@Injectable()
export class SktPlaceService {
  constructor(private readonly sktPlaceRepository: SktPlaceRepository) {}

  async getSktPlaces(): Promise<SktPlace[]> {
    return await this.sktPlaceRepository.getSktPlace();
  }

  async getActivatedPlaces(): Promise<SktPlace[]> {
    return this.sktPlaceRepository.getSktPlace({ status: SktPlaceStatus.Activated });
  }

  async getSktPlace(idx: number): Promise<SktPlace | undefined> {
    const [place] = await this.sktPlaceRepository.getSktPlace({ idx });
    return place;
  }
}
