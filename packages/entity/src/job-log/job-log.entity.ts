import { Column, CreateDateColumn, DeepPartial, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  static createInstance(obj: DeepPartial<JobLog>): JobLog {
    const instance = new JobLog();
    return Object.assign(instance, obj);
  }
}
