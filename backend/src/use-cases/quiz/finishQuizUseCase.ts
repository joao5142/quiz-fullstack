import { QuizRepository } from '@/repositories/quiz/repository'
import { Quiz } from '@prisma/client'

interface FinishQuizUseCaseRequest {
  quizId: number
}

export class FinishQuizUseCase {
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute({ quizId }: FinishQuizUseCaseRequest): Promise<Quiz | null> {
    const createdQuiz = await this.quizRepository.finish(quizId)

    return createdQuiz
  }
}
