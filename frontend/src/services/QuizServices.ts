import { AlternativeSlugTypes, IQuestion } from '../types/globals/question'
import api from '@/lib/api'
import { IPagination } from '~/types/globals/pagination'

import { IQuiz, IQuizQuestion, QuizCategoryTypes } from '~/types/globals/quiz'

const resourceName = '/quiz'

export class QuizServices {
  static async createQuiz(category: QuizCategoryTypes): Promise<IQuiz | null> {
    const { data } = await api.post(resourceName, {
      userId: 1,
      questionCategorySlug: category,
    })
    return data
  }

  static async getById(quizId: number): Promise<IQuiz | null> {
    const { data } = await api.get(`${resourceName}/${quizId}`)

    return data
  }

  static async getPaginatedQuestions({
    quizId,
    page,
  }: {
    quizId: number
    page: number
  }): Promise<IPagination<IQuizQuestion> | null> {
    const { data } = await api.get(`${resourceName}/${quizId}/questions`, {
      params: {
        page,
      },
    })
    return data
  }

  static async markQuizQuestion({
    quizId,
    questionId,
    markedAlternative,
  }: {
    quizId: number
    questionId: number
    markedAlternative: AlternativeSlugTypes
  }): Promise<IQuestion | null> {
    const { data } = await api.post(`${resourceName}/${quizId}/questions/${questionId}/mark`, {
      markedAlternative,
    })
    return data
  }

  static async finishQuiz(quizId: number): Promise<IQuiz | null> {
    const { data } = await api.post(`${resourceName}/${quizId}/finish`)
    return data
  }
}
