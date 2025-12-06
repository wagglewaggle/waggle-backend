import { Logger } from '@nestjs/common';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { TraceIdRatioBasedSampler } from '@opentelemetry/sdk-trace-base';

export function initOpenTelemetry(logger: Logger) {
  const traceExporter = new OTLPTraceExporter({
    url: 'http://localhost:4317',
  });

  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: 'waggle-api',
    }),
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
    sampler: new TraceIdRatioBasedSampler(0.1),
  });

  sdk.start();
  logger.log('OpenTelemetry SDK started.');

  process.on('SIGTERM', () => {
    sdk
      .shutdown()
      .then(() => logger.log('OpenTelemetry SDK shut down successfully.'))
      .catch((err) => logger.error('Error shutting down OpenTelemetry SDk:', err))
      .finally(() => process.exit(0));
  });

  return sdk;
}
