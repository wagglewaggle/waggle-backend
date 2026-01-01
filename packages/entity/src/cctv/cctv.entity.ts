import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from '../place/place.entity';

@Entity()
export class Cctv {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar')
  src: string;

  @Column('varchar')
  cctvname: string;

  @ManyToOne(() => Place, (place) => place.cctvs)
  place: Place;
}
