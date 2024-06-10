import { QuestionRepository } from '@/repositories/question/repository'
import { GetByIdUseCase } from '@/use-cases/question/getByIdUseCase'
import { UpdateByIdUseCase } from '@/use-cases/question/updateByIdUseCase'

export function getByIdUseCaseFactory() {
  const questionRepository = new QuestionRepository()

  const getByIdUseCase = new GetByIdUseCase(questionRepository)

  return getByIdUseCase
}

export function updateQuestionByIdFactory() {
  const questionRepository = new QuestionRepository()

  const updateByIdUseCase = new UpdateByIdUseCase(questionRepository)

  return updateByIdUseCase
}
