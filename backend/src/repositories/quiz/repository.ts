import { $Enums, Prisma, Quiz } from '@prisma/client'
import { ICreateQuiz, IQuizRepository } from './repository.interface'
import { prisma } from '@/lib/prisma'

interface ICreateQuizPayload extends ICreateQuiz {
  questionsIds: { questionId: number }[]
  totalQuestions: number
}

export class QuizRepository implements IQuizRepository {
  async calculateScore(quizId: number): Promise<number | null> {
    const questions = await prisma.quizQuestion.findMany({
      where: {
        quizId
      },
      include: {
        question: true
      }
    })
    const score =
      questions?.reduce((accumulator, current) => {
        if (current.question.correctAlternative === current.markedAlternative) {
          return accumulator + 10
        }
        return 0
      }, 0) ?? 0

    return score
  }

  async getById(quizId: number): Promise<Quiz | null> {
    const findedQuiz = await prisma.quiz.findFirst({
      where: {
        id: quizId
      }
    })

    return findedQuiz
  }

  async finish(quizId: number): Promise<Quiz | null> {
    const score = await this.calculateScore(quizId)
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId
      },
      data: {
        status: 'COMPLETED',
        score
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
