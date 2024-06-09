import { IQuiz } from '@/types/globals/quiz'

export const useQuizStore = defineStore('quizStore', () => {
  const quiz = ref<IQuiz | null>(null)

  function setQuiz(quizValue: IQuiz) {
    quiz.value = quizValue
  }

  return {
    quiz,
    setQuiz,
  }
})
