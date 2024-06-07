import { QuestionRepository } from '@/repositorys/question/repository'
import { QuizRepository } from '@/repositorys/quiz/repository'
import { Quiz } from '@prisma/client'

interface CreateQuizUseCaseRequest {
  userId: number
  questionCategoryId: number
}

export class CreateQuizUseCase {
  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly questionRepository: QuestionRepository
  ) {}

  async execute(data: CreateQuizUseCaseRequest): Promise<Quiz | null> {
    const questionsIds = await this.questionRepository.findManyRandomByCategory(
      data.questionCategoryId
    )

    const createdQuiz = await this.quizRepository.create({
      ...data,
      questionsIds
    })

    return createdQuiz
  }
}
