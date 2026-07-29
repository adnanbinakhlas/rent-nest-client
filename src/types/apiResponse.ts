export interface PaginationMeta {
  totalPages: number;
  totalProperties: number;
  limit: number;
  page: number;
  nextPage: number | null;
  prevPage: number | null;
}

export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
  meta?: PaginationMeta;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: unknown;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
