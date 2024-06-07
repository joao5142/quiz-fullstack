import { QuizRepository } from '@/repositorys/quiz/repository'
import { Quiz } from '@prisma/client'

interface GetQuizByIdUseCaseRequest {
  quizId: number
}

export class GetQuizByIdUseCase {
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute({ quizId }: GetQuizByIdUseCaseRequest): Promise<Quiz | null> {
    const createdQuiz = await this.quizRepository.getById(quizId)

    return createdQuiz
  }
}
