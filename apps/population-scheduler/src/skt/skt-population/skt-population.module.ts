import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SktPopulationRepository } from './skt-population.repository';
import { SktPopulationService } from './skt-population.service';
import { SktPopulation } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([SktPopulation])],
  providers: [SktPopulationService, SktPopulationRepository],
  exports: [TypeOrmModule, SktPopulationService],
})
export class SktPopulationModule {}
