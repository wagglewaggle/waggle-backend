import { PlacePopulation, PlacePopulationLevel } from '@waggle/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class PlacePopulationResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _level: PlacePopulationLevel;
  @Exclude() private readonly _message: string;
  @Exclude() private readonly _male: number;
  @Exclude() private readonly _female: number;
  @Exclude() private readonly _zeroGen: number;
  @Exclude() private readonly _teenager: number;
  @Exclude() private readonly _twenties: number;
  @Exclude() private readonly _thirties: number;
  @Exclude() private readonly _forties: number;
  @Exclude() private readonly _fifties: number;
  @Exclude() private readonly _sixties: number;
  @Exclude() private readonly _seventies: number;
  @Exclude() private readonly _resident: number;
  @Exclude() private readonly _nonResident: number;
  @Exclude() private readonly _createdDate: Date;
  @Exclude() private readonly _updatedDate: Date;

  constructor(population: PlacePopulation) {
    this._idx = population.idx;
    this._level = population.level;
    this._message = population.message;
    this._male = population.male;
    this._female = population.female;
    this._zeroGen = population.zeroGen;
    this._teenager = population.teenager;
    this._twenties = population.twenties;
    this._thirties = population.thirties;
    this._forties = population.forties;
    this._fifties = population.fifties;
    this._sixties = population.sixties;
    this._seventies = population.seventies;
    this._resident = population.resident;
    this._nonResident = population.nonResident;
    this._createdDate = population.createdDate;
    this._updatedDate = population.updatedDate;
  }

  @ApiProperty({ example: 1, description: '장소 인구 정보 idx' })
  @Expose()
  get idx(): number {
    return this._idx;
  }

  @ApiProperty({
    example: PlacePopulationLevel.Normal,
    description: '장소 혼잡도',
    enum: PlacePopulationLevel,
  })
  @Expose()
  get level(): PlacePopulationLevel {
    return this._level;
  }

  @ApiProperty({
    example: '사람이 몰려있을 수 있지만 크게 붐비지는 않아요. 도보 이동에 큰 제약이 없어요.',
    description: '장소 혼잡도 관련 메시지',
  })
  @Expose()
  get message(): string {
    return this._message;
  }

  @ApiProperty({ example: 50, description: '남성 비율' })
  @Expose()
  get male(): number {
    return this._male;
  }

  @ApiProperty({ example: 50, description: '여성 비율' })
  @Expose()
  get female(): number {
    return this._female;
  }

  @ApiProperty({ example: 1, description: '0~10세 인구 비율' })
  @Expose()
  get zeroGen(): number {
    return this._zeroGen;
  }

  @ApiProperty({ example: 4, description: '10대 인구 비율' })
  @Expose()
  get teenage(): number {
    return this._teenager;
  }

  @ApiProperty({ example: 19, description: '20대 인구 비율' })
  @Expose()
  get twenties(): number {
    return this._twenties;
  }

  @ApiProperty({ example: 27, description: '30대 인구 비율' })
  @Expose()
  get thirties(): number {
    return this._thirties;
  }

  @ApiProperty({ example: 23, description: '40대 인구 비율' })
  @Expose()
  get forties(): number {
    return this._forties;
  }

  @ApiProperty({ example: 16, description: '50대 인구 비율' })
  @Expose()
  get fifties(): number {
    return this._fifties;
  }

  @ApiProperty({ example: 7, description: '60대 인구 비율' })
  @Expose()
  get sixties(): number {
    return this._sixties;
  }

  @ApiProperty({ example: 3, description: '70대 인구 비율' })
  @Expose()
  get seventies(): number {
    return this._seventies;
  }

  @ApiProperty({ example: 53, description: '상주 인구 비율' })
  @Expose()
  get resident(): number {
    return this._resident;
  }

  @ApiProperty({ example: 47, description: '비상주 인구 비율' })
  @Expose()
  get nonResident(): number {
    return this._nonResident;
  }

  @ApiProperty({ description: '생성 날짜' })
  @Expose()
  get createdDate(): Date {
    return this._createdDate;
  }

  @ApiProperty({ description: '업데이트 날짜' })
  @Expose()
  get updatedDate(): Date {
    return this._updatedDate;
  }
}
