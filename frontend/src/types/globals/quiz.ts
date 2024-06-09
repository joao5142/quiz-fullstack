import { AlternativeSlugTypes, IQuestion } from './question'

export type QuizCategoryTypes = 'html' | 'js' | 'css' | 'accessibility'

export interface IQuiz {
  id: number
  name: string
  score: number
  status: 'PENDING' | 'COMPLETED'
  totalQuestions: number
  createdAt: string
  updatedAt: string
  userId: number
}

export interface IQuizQuestion {
  id: number
  questionId: number
  markedAlternative: AlternativeSlugTypes
  quizId: number
  question: IQuestion
}
