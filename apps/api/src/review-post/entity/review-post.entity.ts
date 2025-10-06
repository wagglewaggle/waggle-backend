import {
  ExtraPlace,
  KtPlace,
  PinReviewPost,
  Reply,
  ReviewPost,
  ReviewPostImage,
  ReviewPostReport,
  ReviewPostStatus,
  SktPlace,
  User,
} from '@waggle/entity';

export class ReviewPostEntity extends ReviewPost {
  readonly idx: number;
  readonly content: string;
  readonly view: number;
  readonly status: ReviewPostStatus;
  readonly createdDate: Date;
  readonly updatedDate: Date;
  readonly replies: Reply[];
  readonly reviewPostImages: ReviewPostImage[];
  readonly pinReviewPosts: PinReviewPost[];
  readonly reports: ReviewPostReport[];
  readonly user: User;
  readonly sktPlace: SktPlace;
  readonly ktPlace: KtPlace;
  readonly extraPlace: ExtraPlace;

  constructor(reviewPost: ReviewPost) {
    super();
    Object.assign(this, reviewPost);
  }
}
