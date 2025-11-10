import { makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { MetricName } from './metric.constant';

export const metricsProviders = [
  makeCounterProvider({
    name: MetricName.HTTP_REQUEST_TOTAL,
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'url'],
  }),
  makeCounterProvider({
    name: MetricName.HTTP_RESPONSE_STATUS_TOTAL,
    help: 'Total number of HTTP responses by status code',
    labelNames: ['statusCode'],
  }),
];
