import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryType } from '../category-type/category-type.entity';
import { Place } from '../place/place.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => CategoryType, (categoryType) => categoryType.categories)
  type: CategoryType;

  @ManyToOne(() => Place, (place) => place.categories)
  place: Place;
}
