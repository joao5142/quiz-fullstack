import { QuestionRepository } from '../../repositories/question/repository'
import { Question } from '@prisma/client'

interface UpdateByIdUseCaseRequest {
  questionId: number
  data: Partial<Question>
}

export class UpdateByIdUseCase {
  constructor(private readonly questionRepository: QuestionRepository) {}
  async execute({ questionId, data }: UpdateByIdUseCaseRequest) {
    const question = await this.questionRepository.updateById({ questionId, data })

    return question
  }
}
