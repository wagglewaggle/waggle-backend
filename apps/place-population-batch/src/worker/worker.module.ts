import { Module } from '@nestjs/common';
import { PlacePopulationWorker } from './place-population/place-population.worker';
import { KtPopulationModule } from '../kt-population/kt-population.module';
import { JobLogModule } from '../job-log/job-log.module';

@Module({
  imports: [KtPopulationModule, JobLogModule],
  providers: [PlacePopulationWorker],
  exports: [PlacePopulationWorker],
})
export class WorkerModule {}
