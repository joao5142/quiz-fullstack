import { Quiz, Prisma, Categories } from '@prisma/client'

export interface ICreateQuiz {
  userId: number
  questionCategorySlug: Categories
}

export interface ICalculateScoreResponse {
  score: number
  correctQuestions: number
}

export interface IQuizRepository {
  create(data: ICreateQuiz): Promise<Quiz | null>
  finish(quizId: number): Promise<Quiz | null>
  getById(quizId: number): Promise<Quiz | null>
  calculateScore(quizId: number): Promise<ICalculateScoreResponse | null>
}
