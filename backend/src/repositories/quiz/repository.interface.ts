import { Quiz, Prisma } from '@prisma/client'

export interface ICreateQuiz {
  userId: number
  questionCategorySlug: string
}
export interface IQuizRepository {
  create(data: ICreateQuiz): Promise<Quiz | null>
  finish(quizId: number): Promise<Quiz | null>
  getById(quizId: number): Promise<Quiz | null>
}
