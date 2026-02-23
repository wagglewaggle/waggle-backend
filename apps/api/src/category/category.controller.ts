import { Controller, Get } from '@nestjs/common';
import { ApiPath } from './category.constant';
import { CategoryService } from './category.service';
import { ListResponseDto } from '../common/dtos/responses/common-paging.dto';
import { CategoryTypeService } from '../category-type/category-type.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryTypeResponseDto } from './dtos/responses/category-type-response.dto';
import { ApiListResponse } from '../app/utils/swagger.util';

@ApiTags('Category')
@Controller(ApiPath.Root)
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryTypeService: CategoryTypeService,
  ) {}

  @Get()
  @ApiOperation({ summary: '카테고리 목록 조회', description: '카테고리 목록을 조회합니다.' })
  @ApiListResponse(CategoryTypeResponseDto)
  async getCategoryList(): Promise<ListResponseDto<CategoryTypeResponseDto>> {
    const categoryTypes = await this.categoryTypeService.getCategoryTypeList();
    return new ListResponseDto(categoryTypes.map((categoryType) => new CategoryTypeResponseDto(categoryType)));
  }
}
