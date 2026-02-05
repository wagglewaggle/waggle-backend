import { Cctv } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class CctvResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _src: string;
  @Exclude() private readonly _cctvname: string;

  constructor(cctv: Cctv) {
    this._idx = cctv.idx;
    this._src = cctv.src;
    this._cctvname = cctv.cctvname;
  }

  @ApiProperty({ example: 1, description: 'CCTV idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({
    example: 'https://data.seoul.go.kr/SeoulRtd/cctv?src=http://210.179.218.52:1935/live/165.stream/playlist.m3u8&cctvname=L010142',
    description: 'CCTV 영상 주소',
  })
  @Expose()
  get src(): string {
    return this._src;
  }

  @ApiProperty({ example: '종합운동장', description: 'CCTV 이름' })
  @Expose()
  get cctvname(): string {
    return this._cctvname;
  }
}
