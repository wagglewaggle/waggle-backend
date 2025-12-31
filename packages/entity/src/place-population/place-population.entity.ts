import { Column, CreateDateColumn, DeepPartial, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PlacePopulationLevel } from './place-population.constant';
import { Place } from '../place/place.entity';

@Entity()
export class PlacePopulation {
  @PrimaryGeneratedColumn()
  idx: number;

  @OneToOne(() => Place, (place) => place.population)
  @JoinColumn()
  place: Place;

  @Column('enum', { enum: PlacePopulationLevel })
  level: PlacePopulationLevel;

  @Column('text')
  message: string;

  @Column('int')
  male: number;

  @Column('int')
  female: number;

  @Column('int')
  zeroGen: number;

  @Column('int')
  teenager: number;

  @Column('int')
  twenties: number;

  @Column('int')
  thirties: number;

  @Column('int')
  forties: number;

  @Column('int')
  fifties: number;

  @Column('int')
  sixties: number;

  @Column('int')
  seventies: number;

  @Column('int')
  resident: number;

  @Column('int')
  nonResident: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  static createInstance(obj: DeepPartial<PlacePopulation>): PlacePopulation {
    const instance = new PlacePopulation();
    return Object.assign(instance, obj);
  }

  static getPopulationLevelByApiResult(areaCongestLevel: string) {
    switch (areaCongestLevel) {
      case '여유':
        return PlacePopulationLevel.Relaxation;
      case '보통':
        return PlacePopulationLevel.Normal;
      case '약간 붐빔':
      case '붐빔':
        return PlacePopulationLevel.Crowded;
      case '매우 붐빔':
        return PlacePopulationLevel.VeryCrowded;
      default:
        throw new Error(`Area Congest Level Error : ${areaCongestLevel}`);
    }
  }
}
