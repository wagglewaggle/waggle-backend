import { Injectable } from '@nestjs/common';
import { KtPlaceRepository } from './kt-place.repository';
import { KtPlace, KtPlaceStatus } from '@waggle/entity';

@Injectable()
export class KtPlaceService {
  constructor(private readonly ktPlaceRepository: KtPlaceRepository) {}

  async getKtPlaces(): Promise<KtPlace[]> {
    return await this.ktPlaceRepository.getKtPlace();
  }

  async getActivatedPlaces(): Promise<KtPlace[]> {
    return this.ktPlaceRepository.getKtPlace({ status: KtPlaceStatus.Activated });
  }

  async getKtPlace(idx: number): Promise<KtPlace | undefined> {
    const [place] = await this.ktPlaceRepository.getKtPlace({ idx });
    return place;
  }

  async getKtPlaceAndAccidents(idx: number): Promise<KtPlace | undefined> {
    const [place] = await this.ktPlaceRepository.getKtPlace({ idx }, ['accidents']);
    return place;
  }
}
