import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KtRoadTrafficService } from './kt-road-traffic.service';
import { KtRoadTrafficRepository } from './kt-road-traffic.repository';
import { KtRoadTraffic } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([KtRoadTraffic])],
  providers: [KtRoadTrafficService, KtRoadTrafficRepository],
  exports: [TypeOrmModule, KtRoadTrafficService],
})
export class KtRoadTrafficModule {}
