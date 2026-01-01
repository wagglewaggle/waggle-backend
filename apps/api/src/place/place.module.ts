import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from '@waggle/entity';
import { LocationModule } from '../location/location.module';
import { PlaceRepository } from './place.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Place]), LocationModule],
  providers: [PlaceService, PlaceRepository],
  controllers: [PlaceController],
})
export class PlaceModule {}
