import { Question, QuizQuestion } from '@prisma/client'
import { IQuizQuestionRepository } from './repository.interface'
import { prisma } from '@/lib/prisma'
import { IPaginatedQuizQuestion } from '@/types/quizQuestion'

interface IMarkQuizQuestion {
  quizId: number
  questionId: number
  markedAlternative: string
}
export class QuizQuestionRepository implements IQuizQuestionRepository {
  async markQuizQuestion({
    quizId,
    questionId,
    markedAlternative
  }: IMarkQuizQuestion): Promise<Partial<Question> | null> {
    const question = await prisma.quizQuestion.update({
      where: { quizId_questionId: { quizId, questionId } },

      data: {
        markedAlternative
      }
    })

    return question
  }

  async getPaginatedByQuizId(
    quizId: number,
    page: number = 1
  ): Promise<IPaginatedQuizQuestion | null> {
    const quizQuestionsCount = await prisma.quizQuestion.count({
      where: {
        quizId
      }
    })

    const questions = await prisma.quizQuestion.findMany({
      take: 1,
      skip: page - 1,
      where: {
        quizId: quizId
      },
      include: {
        question: true
      },
      orderBy: {
        id: 'asc'
      }
    })

    return {
      totalPages: quizQuestionsCount,
      data: questions ?? null,
      nextPage: page < quizQuestionsCount ? page + 1 : null,
      page
    }
  }
  getAllByQuizId(quizId: number): Promise<QuizQuestion[] | null> {
    const questions = prisma.quizQuestion.findMany({
      where: {
        quizId: quizId
      },
      include: {
        question: true
      }
    })

    return questions
  }
}
