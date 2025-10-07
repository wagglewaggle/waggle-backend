import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtraPlaceRepository } from './extra-place.repository';
import { ExtraPlaceService } from './extra-place.service';
import { ExtraPlace } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExtraPlace])],
  providers: [ExtraPlaceService, ExtraPlaceRepository],
  exports: [TypeOrmModule, ExtraPlaceService],
})
export class ExtraPlaceModule {}
