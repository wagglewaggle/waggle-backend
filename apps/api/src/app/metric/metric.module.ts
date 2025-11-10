import { Module } from '@nestjs/common';
import { metricsProviders } from './metric.provider';
import { MetricInterceptor } from './metric.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [PrometheusModule.register()],
  providers: [MetricInterceptor, ...metricsProviders],
  exports: [PrometheusModule, ...metricsProviders],
})
export class MetricModule {}
