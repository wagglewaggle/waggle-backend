import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyReportService } from './reply-report.service';
import { ReplyReportRepository } from './reply-report.repository';
import { ReplyReport } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReplyReport])],
  providers: [ReplyReportService, ReplyReportRepository],
  exports: [TypeOrmModule, ReplyReportService],
})
export class ReplyReportModule {}
