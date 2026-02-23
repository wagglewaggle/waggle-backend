import { ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export const ApiListResponse = (model: string | Type<unknown>) => {
  return ApiResponse({
    status: 200,
    description: '성공',
    schema: {
      type: 'object',
      properties: {
        list: {
          type: 'array',
          items: { $ref: getSchemaPath(model) },
        },
      },
    },
  });
};

export const ApiListPagingResponse = (model: string | Type<unknown>) => {
  return ApiResponse({
    status: 200,
    description: '성공',
    schema: {
      type: 'object',
      properties: {
        list: {
          type: 'array',
          items: { $ref: getSchemaPath(model) },
        },
        total: { type: 'number' },
        offset: { type: 'number' },
        limit: { type: 'number' },
      },
    },
  });
};
