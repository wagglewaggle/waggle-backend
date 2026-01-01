import { HttpStatus, Injectable } from '@nestjs/common';
import { PlaceRepository } from './place.repository';
import { LocationService } from '../location/location.service';
import { Place, Location } from '@waggle/entity';
import { ClientRequestException } from '../app/exceptions/request.exception';
import ERROR_CODE from '../app/exceptions/error-code';
import { PlaceListFilterQueryDto } from './place.dto';

@Injectable()
export class PlaceService {
  constructor(private readonly placeRepository: PlaceRepository, private readonly locationService: LocationService) {}

  async getActivatedPlaces(query: PlaceListFilterQueryDto): Promise<[Place[], number]> {
    return await this.placeRepository.getActivatedPlaces(query);
  }

  async getPlaceByIdx(idx: number, relation?: string[]): Promise<Place> {
    const [place] = await this.placeRepository.getPlace({ idx }, relation);
    if (!place) {
      throw new ClientRequestException(ERROR_CODE.ERR_0002001, HttpStatus.BAD_REQUEST);
    }

    return place;
  }

  async getPlaceAllInfo(idx: number): Promise<Place | [Place, Location]> {
    const place = await this.getPlaceByIdx(idx, ['population', 'accidents', 'cctvs', 'roadTraffic', 'location']);
    if (!place.location) {
      return place;
    }
    const location = await this.locationService.getLocationByName(place.location.name, place);
    return [place, location];
  }
}
