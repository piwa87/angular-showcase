import { Part } from './part.model';

export interface PartsoegningResponse {
  data: Part[];
  paginationInfo: PaginationInfo;
}

export interface PaginationInfo {
  Page: number;
  PageSize: number;
  TotalCount: number;
  TotalPages: number;
  HasNextPage: boolean;
  HasPreviousPage: boolean;
}
