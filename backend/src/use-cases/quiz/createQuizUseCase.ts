import { QuestionRepository } from '@/repositories/question/repository'
import { QuestionCategoryRepository } from '@/repositories/questionCategory/repository'
import { QuizRepository } from '@/repositories/quiz/repository'
import { Quiz } from '@prisma/client'

interface CreateQuizUseCaseRequest {
  userId: number
  questionCategorySlug: string
}

export class CreateQuizUseCase {
  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly questionCategoryRepository: QuestionCategoryRepository,
    private readonly questionRepository: QuestionRepository
  ) {}

  async execute(data: CreateQuizUseCaseRequest): Promise<Quiz | null> {
    const category = await this.questionCategoryRepository.findBySlug(data.questionCategorySlug)

    const questionsIds = await this.questionRepository.findManyRandomByCategory(category!.id)

    const createdQuiz = await this.quizRepository.create({
      ...data,
      totalQuestions: questionsIds.length,
      questionsIds
    })

    return createdQuiz
  }
}
