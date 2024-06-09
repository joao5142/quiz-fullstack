import { QuizCategoryTypes } from './quiz'
import { ColorTypes } from '~/plugins/vuetify'

export type AlternativeSlugTypes = 'a' | 'b' | 'c' | 'd' | 'e'

export interface IAlternative {
  slug: AlternativeSlugTypes
  text: string
}

export interface IQuestion {
  id: number
  alternativeA: string
  alternativeB: string
  alternativeC: string
  alternativeD: string
  alternativeE: string
  description: string
  markedAlternative?: AlternativeSlugTypes
  correctAlternative: AlternativeSlugTypes
  questionCategoryId: number
  createdAt: string
  updatedAt: string
}
export interface IQuestionCategoryItem {
  text: string
  slug: QuizCategoryTypes
  color: ColorTypes
  icon: string
}
