import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { KtPlace } from '../kt-place/kt-place.entity';
import { SktPlace } from '../skt-place/skt-place.entity';
import { Place } from '../place/place.entity';

@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar')
  name: string;

  @OneToMany(() => Place, (place) => place.province)
  places: Place[];

  @OneToMany(() => KtPlace, (place) => place.province)
  ktPlaces: KtPlace[];

  @OneToMany(() => SktPlace, (sktPlace) => sktPlace.province)
  sktPlaces: SktPlace[];
}
