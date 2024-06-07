import { prisma } from '@/lib/prisma'
import { QuestionRepository } from '../../repositorys/question/repository'

interface GetByIdUseCaseRequest {
  id: number
}

export class GetByIdUseCase {
  constructor(private readonly questionRepository: QuestionRepository) {}
  async execute({ id }: GetByIdUseCaseRequest) {
    const question = await this.questionRepository.getById(id)

    return question
  }
}
