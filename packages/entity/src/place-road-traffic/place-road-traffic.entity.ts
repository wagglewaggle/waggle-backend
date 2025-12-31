import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Place } from '../place/place.entity';

@Entity()
export class PlaceRoadTraffic {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('text')
  info: string;

  @Column('varchar')
  type: string;

  @Column('int')
  avgSpeed: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(() => Place, (place) => place.roadTraffic)
  @JoinColumn()
  place: Place;
}
