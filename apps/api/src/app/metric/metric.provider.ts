import { makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';
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
  makeHistogramProvider({
    name: MetricName.HTTP_REQUEST_DURATION_SECONDS,
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'url'],
    buckets: [0.1, 0.3, 0.5, 1, 2, 5],
  }),
];
