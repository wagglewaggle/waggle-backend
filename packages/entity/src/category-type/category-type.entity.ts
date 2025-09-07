import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class CategoryType {
  @PrimaryColumn('int')
  idx: number;

  @Column('varchar', { unique: true })
  type: string;

  @OneToMany(() => Category, (category) => category.type)
  categories: Category[];
}
