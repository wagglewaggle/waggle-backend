import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Cctv } from '../cctv/cctv.entity';
import { Location } from '../location/location.entity';
import { Province } from '../province/province.entity';
import { PlaceStatus } from './place.constant';
import { PlacePopulation } from '../place-population/place-population.entity';
import { PlaceRoadTraffic } from '../place-road-traffic/place-road-traffic.entity';
import { PlaceAccident } from '../place-accident/place-accident.entity';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar')
  name: string;

  @Column('double')
  x: number;

  @Column('double')
  y: number;

  @Column('varchar')
  address: string;

  @Column('enum', { enum: PlaceStatus })
  status: PlaceStatus;

  @ManyToOne(() => Province, (province) => province.places)
  province: Province;

  @ManyToOne(() => Location, (location) => location.places, {
    nullable: true,
  })
  location: Location;

  @OneToMany(() => Category, (category) => category.place)
  categories: Category[];

  @OneToOne(() => PlacePopulation, (population) => population.place)
  population: PlacePopulation;

  @OneToOne(() => PlaceRoadTraffic, (roadTraffic) => roadTraffic.place)
  roadTraffic: PlaceRoadTraffic;

  @OneToMany(() => PlaceAccident, (accident) => accident.place)
  accidents: PlaceAccident[];

  @OneToMany(() => Cctv, (cctv) => cctv.place)
  cctvs: Cctv[];
}
