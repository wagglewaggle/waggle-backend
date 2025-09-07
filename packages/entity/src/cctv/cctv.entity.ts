import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { KtPlace } from '../kt-place/kt-place.entity';
import { SktPlace } from '../skt-place/skt-place.entity';

@Entity()
export class Cctv {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar')
  src: string;

  @Column('varchar')
  cctvname: string;

  @ManyToOne(() => KtPlace, (ktPlace) => ktPlace.cctvs)
  ktPlace: KtPlace;

  @ManyToOne(() => SktPlace, (sktPlace) => sktPlace.cctvs)
  sktPlace: SktPlace;
}
