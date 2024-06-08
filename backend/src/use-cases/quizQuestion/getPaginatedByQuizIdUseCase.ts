import { QuizQuestionRepository } from '@/repositories/quizQuestion/repository'
import { IPaginatedQuizQuestion } from '@/types/quizQuestion'

interface GetPaginatedByQuizIdUseCaseRequest {
  quizId: number
  page: number
}

export class GetPaginatedByQuizIdUseCase {
  constructor(private readonly quizQuestionRepository: QuizQuestionRepository) {}

  async execute({
    quizId,
    page
  }: GetPaginatedByQuizIdUseCaseRequest): Promise<IPaginatedQuizQuestion | null> {
    const createdQuiz = await this.quizQuestionRepository.getPaginatedByQuizId(quizId, page)

    return createdQuiz
  }
}
