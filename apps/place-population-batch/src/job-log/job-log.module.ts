import { Module } from '@nestjs/common';
import { JobLogRepository } from './job-log.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobLog } from '@waggle/entity';
import { JobLogService } from './job-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobLog])],
  providers: [JobLogService, JobLogRepository],
  exports: [TypeOrmModule, JobLogService],
})
export class JobLogModule {}
