import { IQuiz } from '@/types/globals/quiz'

export const useUserStore = defineStore('user', () => {
  const quiz = ref<IQuiz | null>(null)

  return {
    quiz,
  }
})
