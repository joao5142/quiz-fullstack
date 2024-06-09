import { getIsUserLoggedIn, getStoredUser, getUserToken } from '~/storage/local/modules/user'

export function useAuth() {
  const user = getStoredUser()

  const userToken = getUserToken()

  const isUserLoggedIn = computed(async () => {
    return await getIsUserLoggedIn()
  })

  const isUserAuthenticated = computed(() => {
    return isUserLoggedIn && userToken
  })

  return { user, isUserLoggedIn, isUserAuthenticated, userToken }
}
