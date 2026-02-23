import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { ClientRequestException } from '../errors/request.exception';
import { ErrorCode } from '../errors/error-code';
import { fillTemplate } from '../utils/string.util';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    let statusCode = 500;
    const sendData: { errorCode: string; message: string } = {
      errorCode: 'ERR_0000001',
      message: ErrorCode.ERR_0000001,
    };

    if (exception instanceof ClientRequestException) {
      statusCode = exception.getStatus();

      sendData.message = exception.getResponse() as string;
      sendData.errorCode = this.getErrorCode(sendData.message);

      if (Object.keys(exception.value).length > 0) {
        sendData.message = fillTemplate(sendData.message, exception.value);
      }
    } else if (exception instanceof NotFoundException) {
      statusCode = HttpStatus.NOT_FOUND;

      sendData.errorCode = 'ERR_0000002';
      sendData.message = ErrorCode.ERR_0000002;
    } else if (exception instanceof HttpException) {
      statusCode = exception.getStatus();

      sendData.errorCode = 'ERR_0000003';
      sendData.message = ErrorCode.ERR_0000003;
    }

    res.status(statusCode).json(sendData);
  }

  getErrorCode(message: string): string {
    try {
      const errorCodes = Object.keys(ErrorCode);
      const result = errorCodes.find((code) => ErrorCode[code] === message);
      if (result) {
        return result;
      }
      throw new Error('Not found error code');
    } catch (e) {
      return 'ERR_0000001';
    }
  }
}
