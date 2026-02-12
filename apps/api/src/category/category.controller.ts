import { Controller, Get } from '@nestjs/common';
import { ApiPath } from './category.constant';
import { CategoryService } from './category.service';
import { IListResponse } from '../app/interfaces/common.interface';
import { CategoryTypeService } from '../category-type/category-type.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryTypeResponseDto } from './dtos/category-type-response.dto';
import { ApiListCountResponse } from '../app/utils/swagger.util';

@ApiTags('Category')
@Controller(ApiPath.Root)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService, private readonly categoryTypeService: CategoryTypeService) {}

  @Get()
  @ApiOperation({ summary: '카테고리 목록 조회', description: '카테고리 목록을 조회합니다.' })
  @ApiListCountResponse(CategoryTypeResponseDto)
  async getCategoryList(): Promise<IListResponse<CategoryTypeResponseDto>> {
    const categoryTypes = await this.categoryTypeService.getCategoryTypeList();
    return { list: categoryTypes.map((categoryType) => new CategoryTypeResponseDto(categoryType)) };
  }
}
