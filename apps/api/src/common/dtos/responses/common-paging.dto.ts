export class ListResponseDto<T> {
  list: T[];

  constructor(data: T[]) {
    this.list = data;
  }
}

export class ListPagingResponseDto<T> extends ListResponseDto<T> {
  total: number;
  offset: number;
  limit: number;

  constructor(data: T[], total: number, offset: number = 0, limit: number = 10) {
    super(data);

    this.total = total;
    this.offset = offset;
    this.limit = limit;
  }
}
