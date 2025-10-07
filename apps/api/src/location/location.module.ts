import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationRepository } from './location.repository';
import { Location } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationService, LocationRepository],
  controllers: [LocationController],
  exports: [TypeOrmModule, LocationService],
})
export class LocationModule {}
