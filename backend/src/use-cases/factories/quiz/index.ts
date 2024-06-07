import { QuestionRepository } from '@/repositorys/question/repository'
import { QuizRepository } from '@/repositorys/quiz/repository'
import { CreateQuizUseCase } from '@/use-cases/quiz/createQuizUseCase'
import { FinishQuizUseCase } from '@/use-cases/quiz/finishQuizUseCase'
import { GetQuizByIdUseCase } from '@/use-cases/quiz/getQuizByIdUseCase'

export function createQuizUseCaseFactory() {
  const questionRepository = new QuestionRepository()
  const quizRepository = new QuizRepository()

  const createQuizUseCase = new CreateQuizUseCase(quizRepository, questionRepository)

  return createQuizUseCase
}

export function finishQuizUseCaseFactory() {
  const quizRepository = new QuizRepository()

  const finishQuizUseCase = new FinishQuizUseCase(quizRepository)

  return finishQuizUseCase
}

export function getQuizByIdUseCaseFactory() {
  const quizRepository = new QuizRepository()

  const getQuizByIdUseCase = new GetQuizByIdUseCase(quizRepository)

  return getQuizByIdUseCase
}
