import { QuizRepository } from '@/repositories/quiz/repository'

export class CalculateQuizScoreUseCase {
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute() {}
}
