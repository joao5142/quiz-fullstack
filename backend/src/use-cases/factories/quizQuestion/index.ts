import { QuizQuestionRepository } from '@/repositories/quizQuestion/repository'
import { GetPaginatedByQuizIdUseCase } from '@/use-cases/quizQuestion/getPaginatedByQuizIdUseCase'
import { MarkQuizQuestionUseCase } from '@/use-cases/quizQuestion/markQuizQuestionUseCase'

export function getPaginatedByQuizIdUseCaseFactory() {
  const quizQuestionRepository = new QuizQuestionRepository()

  const getPaginatedByQuizIdUseCase = new GetPaginatedByQuizIdUseCase(quizQuestionRepository)

  return getPaginatedByQuizIdUseCase
}

export function markQuizQuestionUseCaseFactory() {
  const quizQuestionRepository = new QuizQuestionRepository()

  const markQuizQuestionUseCase = new MarkQuizQuestionUseCase(quizQuestionRepository)

  return markQuizQuestionUseCase
}
