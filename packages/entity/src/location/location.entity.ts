import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Place } from '../place/place.entity';

@Entity()
export class Location {
  @PrimaryColumn()
  idx: number;

  @Column('varchar')
  name: string;

  @OneToMany(() => Place, (place) => place.location, { nullable: true })
  places: Place[];
}
