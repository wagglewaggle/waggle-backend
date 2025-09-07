import { Module } from '@nestjs/common';
import { CategoryTypeService } from './category-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTypeRepository } from './category-type.repository';
import { CategoryType } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryType])],
  providers: [CategoryTypeService, CategoryTypeRepository],
  exports: [TypeOrmModule, CategoryTypeService],
})
export class CategoryTypeModule {}
