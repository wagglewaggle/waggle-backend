import { HttpStatus, Injectable } from '@nestjs/common';
import { LocationRepository } from './location.repository';
import { ClientRequestException } from '../app/errors/request.exception';
import { Location, Place } from '@waggle/entity';
import { ErrorCode } from '../app/errors/error-code';

@Injectable()
export class LocationService {
  constructor(private readonly locationRepository: LocationRepository) {}

  async getLocationAll(): Promise<[Location[], number]> {
    return await this.locationRepository.getLocationAll();
  }

  async getLocationByName(name: string, duplicatePlace?: Place): Promise<Location> {
    const location = await this.locationRepository.getNearByLocation(name, duplicatePlace);
    if (!location) {
      throw new ClientRequestException(ErrorCode.ERR_0040001, HttpStatus.NOT_FOUND);
    }

    return location;
  }
}
