import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Location } from '../location/location.entity';
import { Province } from '../province/province.entity';
import { SktPopulation } from '../skt-population/skt-population.entity';
import { SktPlaceStatus } from './skt-place.constant';
import { Cctv } from '../cctv/cctv.entity';

@Entity()
export class SktPlace {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar')
  poiId: string;

  @Column('varchar')
  name: string;

  @Column('double')
  x: number;

  @Column('double')
  y: number;

  @Column('varchar')
  address: string;

  @Column('enum', { enum: SktPlaceStatus })
  status: SktPlaceStatus;

  @ManyToOne(() => Province, (province) => province.sktPlaces)
  province: Province;

  @ManyToOne(() => Location, (location) => location.sktPlaces, {
    nullable: true,
  })
  location: Location;

  @OneToMany(() => Category, (category) => category.sktPlace)
  categories: Category[];

  @OneToMany(() => Cctv, (cctv) => cctv.sktPlace)
  cctvs: Cctv[];

  @OneToOne(() => SktPopulation, (sktPopulation) => sktPopulation.place)
  population: SktPopulation;
}
