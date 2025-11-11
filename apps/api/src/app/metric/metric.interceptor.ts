import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { MetricName } from './metric.constant';
import { Counter, Histogram } from 'prom-client';
import { IRequestAugmented } from '../app.interface';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MetricInterceptor implements NestInterceptor {
  constructor(
    @InjectMetric(MetricName.HTTP_REQUEST_TOTAL) private readonly httpRequestTotalCounter: Counter<string>,
    @InjectMetric(MetricName.HTTP_RESPONSE_STATUS_TOTAL) private readonly httpResponseStatusTotalCounter: Counter<string>,
    @InjectMetric(MetricName.HTTP_REQUEST_DURATION_SECONDS) private readonly httpRequestDurationSecondsHistogram: Histogram<string>,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<IRequestAugmented>();
    const method = req.method;
    const url = req.route?.path || req.url;

    if (url.startsWith('/api/metrics')) {
      return next.handle();
    }

    const endTimer = this.httpRequestDurationSecondsHistogram.startTimer({ method, url });
    this.httpRequestTotalCounter.inc({ method, url });

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context.switchToHttp().getResponse();
          const statusCode = response.statusCode;
          this.httpResponseStatusTotalCounter.inc({ statusCode });
          endTimer();
        },
        error: () => {
          const response = context.switchToHttp().getResponse();
          const statusCode = response.statusCode;
          this.httpResponseStatusTotalCounter.inc({ statusCode });
          endTimer();
        },
      }),
    );
  }
}
