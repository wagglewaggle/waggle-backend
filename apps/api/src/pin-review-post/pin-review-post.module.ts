import { Module, forwardRef } from '@nestjs/common';
import { PinReviewPostService } from './pin-review-post.service';
import { PinReviewPostController } from './pin-review-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinReviewPostRepository } from './pin-review-post.repository';
import { ReviewPostModule } from '../review-post/review-post.module';
import { PinReviewPost } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([PinReviewPost]), forwardRef(() => ReviewPostModule)],
  providers: [PinReviewPostService, PinReviewPostRepository],
  controllers: [PinReviewPostController],
  exports: [TypeOrmModule, PinReviewPostService],
})
export class PinReviewPostModule {}
