import { CallHandler, ExecutionContext, HttpException, Injectable, InternalServerErrorException, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { getClientIp } from 'request-ip';
import { ILoggingObject } from './logging.constant';
import { LoggerService } from '@waggle/logger';
import { RequestAugmented } from '../contexts/request-augmented';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly LOGGER_MESSAGE = 'clientRequest';
  private logObj: ILoggingObject;

  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const http = context.switchToHttp();
    const req = http.getRequest<RequestAugmented>();

    this.logObj = {
      success: true,
      startTime: new Date().toISOString(),
      endTime: null,
      elapsedTime: null,
      clientIp: getClientIp(req),
      method: req.method,
      url: req.url,
      params: req.params,
      query: req.query,
      header: req.headers,
      body: req.body,
      error: null,
      errorStack: null,
      errorCode: null,
      errorMessage: null,
    };

    return next.handle().pipe(
      tap(() => {
        this.logObj.success = true;

        this.calculateElapsedTime();

        this.logger.log(this.LOGGER_MESSAGE, this.logObj);
      }),
      catchError((e) => {
        this.logObj.success = false;

        this.logObj.error = JSON.stringify(e);
        this.logObj.errorStack = e.stack;
        this.logObj.errorMessage = e.message;

        this.calculateElapsedTime();

        this.logger.error(this.LOGGER_MESSAGE, this.logObj);

        return throwError(() => (e instanceof HttpException ? e : new InternalServerErrorException(e)));
      }),
    );
  }

  calculateElapsedTime() {
    this.logObj.endTime = new Date().toISOString();
    this.logObj.elapsedTime = new Date(this.logObj.endTime).getTime() - new Date(this.logObj.startTime).getTime();
  }
}
