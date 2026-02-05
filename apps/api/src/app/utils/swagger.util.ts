import { ApiResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiListResponse = (model: string | Function) => {
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

export const ApiListCountResponse = (model: string | Function) => {
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
      },
    },
  });
};
