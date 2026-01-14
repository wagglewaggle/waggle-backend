import { Module } from '@nestjs/common';
import { PlacePopulationConsumer } from './place-population/place-population.consumer';
import { JobLogModule } from '../job-log/job-log.module';
import { PlacePopulationModule } from '../place-population/place-population.module';

@Module({
  imports: [PlacePopulationModule, JobLogModule],
  providers: [PlacePopulationConsumer],
  exports: [PlacePopulationConsumer],
})
export class ConsumerModule {}
