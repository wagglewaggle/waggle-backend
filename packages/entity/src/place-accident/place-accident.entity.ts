import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Place } from '../place/place.entity';

@Entity()
export class PlaceAccident {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  type: string;

  @Column('varchar')
  dtype: string;

  @Column('text')
  info: string;

  @Column('double')
  x: number;

  @Column('double')
  y: number;

  @ManyToOne(() => Place, (place) => place.accidents)
  place: Place;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
