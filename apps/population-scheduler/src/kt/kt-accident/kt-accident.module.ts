import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KtAccidentRepository } from './kt-accident.repository';
import { KtAccidentService } from './kt-accident.service';
import { KtAccident } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([KtAccident])],
  providers: [KtAccidentService, KtAccidentRepository],
  exports: [TypeOrmModule, KtAccidentService],
})
export class KtAccidentModule {}
