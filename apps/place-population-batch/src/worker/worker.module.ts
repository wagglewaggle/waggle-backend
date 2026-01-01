import { Module } from '@nestjs/common';
import { PlacePopulationWorker } from './place-population/place-population.worker';
import { JobLogModule } from '../job-log/job-log.module';
import { PlacePopulationModule } from '../place-population/place-population.module';

@Module({
  imports: [PlacePopulationModule, JobLogModule],
  providers: [PlacePopulationWorker],
  exports: [PlacePopulationWorker],
})
export class WorkerModule {}
