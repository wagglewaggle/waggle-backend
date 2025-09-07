import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { KtRoadTrafficRepository } from './kt-road-traffic.repository';
import { KtRoadTraffic } from '@waggle/entity';

@Injectable()
export class KtRoadTrafficService {
  constructor(private readonly ktRoadTrafficRepository: KtRoadTrafficRepository) {}

  async addKtRoadTraffic(roadTraffic: KtRoadTraffic, manager?: EntityManager): Promise<KtRoadTraffic> {
    return await this.ktRoadTrafficRepository.addKtRoadTraffic(roadTraffic, manager);
  }
}
