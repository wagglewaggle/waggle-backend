import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewPostReportRepository } from './review-post-report.repository';
import { ReviewPostReportService } from './review-post-report.service';
import { ReviewPostReport } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewPostReport])],
  providers: [ReviewPostReportService, ReviewPostReportRepository],
  exports: [ReviewPostReportService],
})
export class ReviewPostReportModule {}
