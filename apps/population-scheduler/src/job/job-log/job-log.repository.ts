import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobLog } from '@waggle/entity';
import { DeepPartial, EntityManager, Repository } from 'typeorm';

@Injectable()
export class JobLogRepository {
  constructor(@InjectRepository(JobLog) private readonly repository: Repository<JobLog>) {}

  createInstance(obj: DeepPartial<JobLog>): JobLog {
    return this.repository.create(obj);
  }

  async add(jobLog: JobLog, manager?: EntityManager): Promise<JobLog> {
    if (manager) {
      return manager.save(JobLog, jobLog);
    }
    return this.repository.save(jobLog);
  }
}
