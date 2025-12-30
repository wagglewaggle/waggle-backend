import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobLog } from '@waggle/entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class JobLogRepository {
  constructor(@InjectRepository(JobLog) private readonly repository: Repository<JobLog>) {}

  async add(jobLog: JobLog, manager?: EntityManager): Promise<JobLog> {
    if (manager) {
      return manager.save(JobLog, jobLog);
    }
    return this.repository.save(jobLog);
  }
}
