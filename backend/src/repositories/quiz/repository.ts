import { $Enums, Prisma, Quiz } from '@prisma/client'
import { ICreateQuiz, IQuizRepository } from './repository.interface'
import { prisma } from '@/lib/prisma'

interface ICreateQuizPayload extends ICreateQuiz {
  questionsIds: { questionId: number }[]
  totalQuestions: number
}

export class QuizRepository implements IQuizRepository {
  async getById(quizId: number): Promise<Quiz | null> {
    const findedQuiz = await prisma.quiz.findFirst({
      where: {
        id: quizId
      }
    })

    return findedQuiz
  }

  async finish(quizId: number): Promise<Quiz | null> {
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId
      },
      data: {
        status: 'COMPLETED'
      }
    })

    return updatedQuiz
  }

  async create(data: ICreateQuizPayload): Promise<Quiz | null> {
    const createdQuiz = await prisma.quiz.create({
      data: {
        name: 'Quiz teste',
        score: 0,
        userId: data.userId,
        quizQuestions: {
          createMany: {
            data: data.questionsIds
          }
        },
        totalQuestions: data.totalQuestions
      }
    })
    return createdQuiz
  }
}
