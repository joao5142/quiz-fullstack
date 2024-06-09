import { storeToRefs } from 'pinia'
import { useQuizStore } from '~/stores/quizStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    if (import.meta.client) {
      const quizStore = useQuizStore()

      const { quiz } = storeToRefs(quizStore)

      if (Boolean(quiz) && quiz?.value?.status === 'COMPLETED') {
        return await navigateTo(`/quiz/${quiz?.value.id}/score`)
      } else {
        return true
      }
    }
  } catch (err) {
    return true
  }
})
