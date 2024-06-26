import { prisma } from '@/lib/prisma'
import { IQuestionRepository } from './repository.interface'
import { $Enums, Question } from '@prisma/client'
import { QUANTITY_QUESTIONS_FOR_QUIZ } from '@/config'

export class QuestionRepository implements IQuestionRepository {
  async updateById({ questionId, data }: { questionId: number; data: Partial<Question> }) {
    const question = await prisma.question.update({
      where: {
        id: questionId
      },
      data: data
    })

    return question
  }
  async findManyRandomByCategory(categoryId: number): Promise<{ questionId: number }[]> {
    const questions = await prisma.question.findManyRandom(QUANTITY_QUESTIONS_FOR_QUIZ, {
      where: {
        questionCategoryId: categoryId
      }
    })

    return questions.map((question) => {
      return { questionId: question.id }
    })
  }

  async getById(id: number): Promise<Question | null> {
    const question = await prisma.question.findFirst({
      where: {
        id
      }
    })

    return question
  }
}
