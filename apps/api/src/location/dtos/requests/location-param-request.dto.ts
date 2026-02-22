import { ApiProperty } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { IsString } from '../../../common/validations/common.validation';

export class GetLocationNameParamDto {
  @ApiProperty({
    example: '송파구',
    required: true,
    description: '지역 이름',
    enum: ['송파구', '영등포구', '강남구', '종로구', '마포구', '중구', '서대문구', '서초구', '용산구', '광진구', '성동구', '강북구'],
  })
  @Validate(IsString)
  name: string;
}
