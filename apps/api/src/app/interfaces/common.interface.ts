export interface ListResponse<T> {
  list: T[];
}

export interface ListPagingResponse<T> extends ListResponse<T> {
  total: number;
  offset: number;
  limit: number;
}
