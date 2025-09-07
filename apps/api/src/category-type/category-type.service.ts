import { Injectable } from '@nestjs/common';
import { CategoryTypeRepository } from './category-type.repository';
import { CategoryType } from '@waggle/entity';

@Injectable()
export class CategoryTypeService {
  constructor(private readonly categoryTypeRepository: CategoryTypeRepository) {}

  async getCategoryTypeList(): Promise<CategoryType[]> {
    return this.categoryTypeRepository.getCategoryTypeList();
  }
}
