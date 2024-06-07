import { useLoadingStore } from '@/stores/loadingStore'

export default defineNuxtPlugin((nuxtApp) => {
  const { setIsPageLoading } = useLoadingStore()

  nuxtApp.hook('app:created', () => {
    setIsPageLoading(true)
  })

  nuxtApp.hook('app:mounted', () => {
    setIsPageLoading(false)
  })
})
