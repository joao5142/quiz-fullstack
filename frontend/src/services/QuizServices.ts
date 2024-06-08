import axios from 'axios'
import { IQuiz, QuizCategoryTypes } from '~/types/globals/quiz'

const resourceName = '/quiz'

export class QuizServices {
  static async createQuiz(category: QuizCategoryTypes): Promise<IQuiz | null> {
    const { data } = await axios.post(resourceName, {
      params: {
        category,
      },
    })
    return data
  }
}
