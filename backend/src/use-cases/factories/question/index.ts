import { QuestionRepository } from '@/repositories/question/repository'
import { GetByIdUseCase } from '@/use-cases/question/getByIdUseCase'

export function getByIdUseCaseFactory() {
  const questionRepository = new QuestionRepository()

  const getByIdUseCase = new GetByIdUseCase(questionRepository)

  return getByIdUseCase
}
