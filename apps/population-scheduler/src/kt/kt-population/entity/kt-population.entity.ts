import { KtPopulation, KtPlace, KtPopulationLevel } from '@waggle/entity';
import { CityDataPopulation } from '../../../job/city-data.interface';

export class KtPopulationEntity extends KtPopulation {
  readonly idx: number;
  readonly place: KtPlace;
  readonly level: KtPopulationLevel;
  readonly message: string;
  readonly male: number;
  readonly female: number;
  readonly zeroGen: number;
  readonly teenager: number;
  readonly twenties: number;
  readonly thirties: number;
  readonly forties: number;
  readonly fifties: number;
  readonly sixties: number;
  readonly seventies: number;
  readonly resident: number;
  readonly nonResident: number;
  readonly updatedDate: Date;

  constructor(place: KtPlace, cityData: CityDataPopulation) {
    super();
    this.place = place;

    switch (cityData.AREA_CONGEST_LVL) {
      case '여유':
        this.level = KtPopulationLevel.Relaxation;
        break;
      case '보통':
        this.level = KtPopulationLevel.Normal;
        break;
      case '약간 붐빔':
      case '붐빔':
        this.level = KtPopulationLevel.Crowded;
        break;
      case '매우 붐빔':
        this.level = KtPopulationLevel.VeryCrowded;
        break;
      default:
        throw new Error(`Area Congest Level Error : ${cityData.AREA_CONGEST_LVL}`);
    }
    this.message = cityData.AREA_CONGEST_MSG;
    this.male = Number(cityData.MALE_PPLTN_RATE);
    this.female = Number(cityData.FEMALE_PPLTN_RATE);
    this.zeroGen = Number(cityData.PPLTN_RATE_0);
    this.teenager = Number(cityData.PPLTN_RATE_10);
    this.twenties = Number(cityData.PPLTN_RATE_20);
    this.thirties = Number(cityData.PPLTN_RATE_30);
    this.forties = Number(cityData.PPLTN_RATE_40);
    this.fifties = Number(cityData.PPLTN_RATE_50);
    this.sixties = Number(cityData.PPLTN_RATE_60);
    this.seventies = Number(cityData.PPLTN_RATE_70);
    this.resident = Number(cityData.RESNT_PPLTN_RATE);
    this.nonResident = Number(cityData.NON_RESNT_PPLTN_RATE);
  }
}
