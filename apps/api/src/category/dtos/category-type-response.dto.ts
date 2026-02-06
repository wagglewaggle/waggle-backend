import { CategoryType } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class CategoryTypeResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _type: string;

  constructor(categoryType: CategoryType) {
    this._idx = categoryType.idx;
    this._type = categoryType.type;
  }

  @ApiProperty({ example: 1, description: '카테고리 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({ example: '놀이공원', description: '카테고리 종류' })
  @Expose()
  get type(): string {
    return this._type;
  }
}
