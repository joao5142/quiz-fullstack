import { QuestionRepository } from '@/repositorys/question/repository'
import { QuizRepository } from '@/repositorys/quiz/repository'
import { GetByIdUseCase } from '@/use-cases/question/getByIdUseCase'
import { CreateQuizUseCase } from '@/use-cases/quiz/createQuizUseCase'

export function getByIdUseCaseFactory() {
  const questionRepository = new QuestionRepository()

  const getByIdUseCase = new GetByIdUseCase(questionRepository)

  return getByIdUseCase
}
