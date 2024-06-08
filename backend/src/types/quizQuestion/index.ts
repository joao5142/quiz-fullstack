import { QuizQuestion } from '@prisma/client'

export interface IPaginatedQuizQuestion {
  page: number | null
  nextPage: number | null
  totalPages: number | null
  data: QuizQuestion[] | null
}
