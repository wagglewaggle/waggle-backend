import { Controller, Get, Param } from '@nestjs/common';
import { GetLocationNameParamDto } from './location.dto';
import { LocationService } from './location.service';
import { Location } from '@waggle/entity';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async getLocationAll(): Promise<[Location[], number]> {
    const [location, count] = await this.locationService.getLocationAll();
    return [location, count];
  }

  @Get(':name')
  async getNearByLocation(@Param() param: GetLocationNameParamDto) {
    return this.locationService.getLocationByName(param.name);
  }
}
