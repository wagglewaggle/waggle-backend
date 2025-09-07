import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SktPlace } from '@waggle/entity';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class SktPlaceRepository {
  constructor(
    @InjectRepository(SktPlace)
    private readonly repository: Repository<SktPlace>,
  ) {}

  async getSktPlace(where?: FindOptionsWhere<SktPlace>, relations?: string[]): Promise<SktPlace[]> {
    const options: FindManyOptions = { where };
    if (Array.isArray(relations)) {
      options.relations = relations;
    }
    return await this.repository.find(options);
  }
}
