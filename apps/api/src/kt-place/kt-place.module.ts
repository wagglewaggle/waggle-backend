import { Module } from '@nestjs/common';
import { KtPlaceService } from './kt-place.service';
import { KtPlaceRepository } from './kt-place.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from '../location/location.module';
import { KtPlace } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([KtPlace]), LocationModule],
  providers: [KtPlaceService, KtPlaceRepository],
  exports: [TypeOrmModule.forFeature([KtPlace]), KtPlaceService],
})
export class KtPlaceModule {}
