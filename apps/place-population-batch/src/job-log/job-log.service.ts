import { Injectable } from '@nestjs/common';
import { JobLogRepository } from './job-log.repository';
import { EntityManager } from 'typeorm';
import { JobLog } from '@waggle/entity';

@Injectable()
export class JobLogService {
  constructor(private readonly jobLogRepository: JobLogRepository) {}

  async add(workerId: string, comment: string, duration: number, manager?: EntityManager): Promise<JobLog> {
    const entity = JobLog.createInstance({ workerId, comment, duration });
    return this.jobLogRepository.add(entity, manager);
  }
}
