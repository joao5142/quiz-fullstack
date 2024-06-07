export const useLoadingStore = defineStore('loading', () => {
  const isRequestLoading = ref(false)
  const isPageLoading = ref(false)

  function setIsRequestLoading(loadingValue: boolean) {
    isRequestLoading.value = loadingValue
  }
  function setIsPageLoading(loadingValue: boolean) {
    isPageLoading.value = loadingValue
  }

  return {
    isRequestLoading,
    isPageLoading,
    setIsPageLoading,
    setIsRequestLoading,
  }
})
