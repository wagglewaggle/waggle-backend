import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KtPlace } from '../kt-place/kt-place.entity';
import { SktPlace } from '../skt-place/skt-place.entity';
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

  @ManyToOne(() => KtPlace, (ktPlace) => ktPlace.cctvs)
  ktPlace: KtPlace;

  @ManyToOne(() => SktPlace, (sktPlace) => sktPlace.cctvs)
  sktPlace: SktPlace;
}
