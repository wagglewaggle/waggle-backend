import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SktPlaceRepository } from './skt-place.repository';
import { SktPlaceService } from './skt-place.service';
import { SktPlace } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([SktPlace])],
  providers: [SktPlaceService, SktPlaceRepository],
  exports: [TypeOrmModule, SktPlaceService],
})
export class SktPlaceModule {}
