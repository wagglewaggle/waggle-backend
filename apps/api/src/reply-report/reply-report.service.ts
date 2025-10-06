import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { ReplyReportRepository } from './reply-report.repository';
import { Reply, ReplyReport } from '@waggle/entity';

@Injectable()
export class ReplyReportService {
  constructor(private readonly replyReportRepository: ReplyReportRepository) {}

  async addReplyReport(user: UserEntity, reply: Reply, manager?: EntityManager) {
    const replyReport = this.replyReportRepository.createInstance(user, reply);
    await this.replyReportRepository.addReplyReport(replyReport, manager);
  }

  async getReplyReport(reply: Reply): Promise<ReplyReport[]> {
    return await this.replyReportRepository.getReplyReport(reply);
  }
}
