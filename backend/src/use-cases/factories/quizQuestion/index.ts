import { QuizQuestionRepository } from '@/repositories/quizQuestion/repository'
import { GetPaginatedByQuizIdUseCase } from '@/use-cases/quizQuestion/getPaginatedByQuizIdUseCase'

export function getPaginatedByQuizIdUseCaseFactory() {
  const quizQuestionRepository = new QuizQuestionRepository()

  const getPaginatedByQuizIdUseCase = new GetPaginatedByQuizIdUseCase(quizQuestionRepository)

  return getPaginatedByQuizIdUseCase
}
