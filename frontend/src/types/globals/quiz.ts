import { IQuestion } from './question'

export type QuizCategoryTypes = 'html' | 'js' | 'css' | 'accessibility'

export interface IQuiz {
  name: string
  category: QuizCategoryTypes
  questions: IQuestion[]
}
