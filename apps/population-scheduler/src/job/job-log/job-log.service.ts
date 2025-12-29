import { Injectable } from '@nestjs/common';
import { JobLogRepository } from './job-log.repository';
import { DeepPartial, EntityManager } from 'typeorm';
import { JobLog } from '@waggle/entity';

@Injectable()
export class JobLogService {
  constructor(private readonly jobLogRepository: JobLogRepository) {}

  createInstance(obj: DeepPartial<JobLog>): JobLog {
    return this.jobLogRepository.createInstance(obj);
  }

  async add(workerId: string, comment: string, duration: number, manager?: EntityManager): Promise<JobLog> {
    const entity = this.jobLogRepository.createInstance({ workerId, comment, duration });
    return this.jobLogRepository.add(entity, manager);
  }
}
