import { QuizQuestionRepository } from '@/repositories/quizQuestion/repository'
import { Question } from '@prisma/client'
import { MarkQuizQuestionError } from './errors/MarkQuizQuestionException'

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
  }: MarkQuizQuestionUseCaseRequest): Promise<Partial<Question> | null> {
    const question = await this.quizQuestionRepository.markQuizQuestion({
      markedAlternative,
      questionId,
      quizId
    })

    return question
  }
}
