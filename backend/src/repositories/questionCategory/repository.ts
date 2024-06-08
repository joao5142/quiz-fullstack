import { prisma } from '@/lib/prisma'
import { IQuestionCategoryRepository } from './repository.interface'
import { QuestionCategory } from '@prisma/client'

export class QuestionCategoryRepository implements IQuestionCategoryRepository {
  async getAll(): Promise<QuestionCategory[] | null> {
    const categories = await prisma.questionCategory.findMany()

    return categories
  }
  async findBySlug(questionCategorySlug: string): Promise<QuestionCategory | null> {
    const category = await prisma.questionCategory.findFirst({
      where: {
        slug: questionCategorySlug
      }
    })

    return category
  }
}
