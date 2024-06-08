import { IPaginatedQuizQuestion } from '@/types/quizQuestion'
import { Question, QuizQuestion } from '@prisma/client'

export interface IQuizQuestionRepository {
  getAllByQuizId(quizId: number): Promise<QuizQuestion[] | null>
  getPaginatedByQuizId(quizId: number, page: number): Promise<IPaginatedQuizQuestion | null>
  markQuizQuestion(
    quizId: number,
    questionId: number,
    markedAlternative: string
  ): Promise<Question | null>
}
