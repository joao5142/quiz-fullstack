import { QuizQuestionRepository } from '@/repositories/quizQuestion/repository'
import { IPaginatedQuizQuestion } from '@/types/quizQuestion'
import { Question } from '@prisma/client'

interface MarkQuizQuestionUseCaseRequest {
  quizId: number
  questionId: number
  markedAlternative: string
}

export class MarkQuizQuestionUseCase {
  constructor(private readonly quizQuestionRepository: QuizQuestionRepository) {}

  async execute({
    quizId,
    questionId,
    markedAlternative
  }: MarkQuizQuestionUseCaseRequest): Promise<Question| null> {
    const question = await this.quizQuestionRepository.

    return question
  }
}
