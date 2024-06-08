import { Question, QuestionCategory, Prisma } from '@prisma/client'

export interface IQuestionRepository {
  getById(id: number): Promise<Question | null>
  findManyRandomByCategory(categoryId: number): Promise<{ questionId: number }[]>
}
