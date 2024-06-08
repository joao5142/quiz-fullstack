import { QuestionCategory } from '@prisma/client'

export interface IQuestionCategoryRepository {
  findBySlug(questionCategorySlug: string): Promise<QuestionCategory | null>
  getAll(): Promise<QuestionCategory[] | null>
}
