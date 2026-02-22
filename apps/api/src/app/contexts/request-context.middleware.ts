import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { RequestContext } from './request.context';
import { RequestAugmented } from './request-augmented';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use(req: RequestAugmented, res: Response, next: NextFunction) {
    req.context = new RequestContext();
    next();
  }
}
