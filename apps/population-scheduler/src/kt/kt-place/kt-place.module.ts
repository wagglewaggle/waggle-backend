import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KtPlaceRepository } from './kt-place.repository';
import { KtPlaceService } from './kt-place.service';
import { KtPlace } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([KtPlace])],
  providers: [KtPlaceService, KtPlaceRepository],
  exports: [TypeOrmModule, KtPlaceService],
})
export class KtPlaceModule {}
