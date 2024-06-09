import { IPaginatedQuizQuestion } from '@/types/quizQuestion'
import { Question, QuizQuestion } from '@prisma/client'

export interface IMarkQuizQuestion {
  quizId: number
  questionId: number
  markedAlternative: string
}
export interface IQuizQuestionRepository {
  getAllByQuizId(quizId: number): Promise<QuizQuestion[] | null>
  getPaginatedByQuizId(quizId: number, page: number): Promise<IPaginatedQuizQuestion | null>
  markQuizQuestion({}: IMarkQuizQuestion): Promise<Partial<Question> | null>
}
