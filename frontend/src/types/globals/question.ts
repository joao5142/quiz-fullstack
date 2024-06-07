import { QuizCategoryTypes } from './quiz'
import { ColorTypes } from '~/plugins/vuetify'

export type AlternativeSlugTypes = 'a' | 'b' | 'c' | 'd' | 'e'

export interface IAlternative {
  slug: AlternativeSlugTypes
  text: string
}

export interface IQuestion {
  name: string
  description: string
  category: QuizCategoryTypes
  alternatives: IAlternative[]
}
export interface IQuestionCategoryItem {
  text: string
  slug: QuizCategoryTypes
  color: ColorTypes
  icon: string
}
