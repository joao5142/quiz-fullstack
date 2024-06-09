export interface IPagination<T> {
  totalPages: number
  nextPage: number
  page: number
  data: T[]
}
