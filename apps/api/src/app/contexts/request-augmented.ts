import { Request } from 'express';
import { RequestContext } from './request.context';

export interface RequestAugmented extends Request {
  context: RequestContext;
}
