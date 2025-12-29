import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class JobLog {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idx: number;

  @Column('varchar', { length: 100 })
  workerId: string;

  @Column('text')
  comment: string;

  @Column('double')
  duration: number;

  @CreateDateColumn()
  createdDate: Date;
}
