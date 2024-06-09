import { IQuiz } from '@/types/globals/quiz'
import { QuizServices } from '~/services/QuizServices'

export const useQuizStore = defineStore('quizStore', () => {
  const quiz = ref<IQuiz | null>(null)

  function setQuiz(quizValue: IQuiz) {
    quiz.value = quizValue
  }

  async function getQuizById(quizId: number) {
    try {
      const quiz = await QuizServices.getById(quizId)

      if (quiz) {
        setQuiz(quiz)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    quiz,
    setQuiz,
    getQuizById,
  }
})
