import { isXSRFExpirated } from '~/storage/cookies/modules/user'
import { getIsUserLoggedIn, getStoredUser, getUserToken } from '~/storage/local/modules/user'

export function useAuth() {
  const user = getStoredUser()

  const isXSRFEnabled = isXSRFExpirated()

  const userToken = getUserToken()

  const isUserLoggedIn = computed(async () => {
    return await getIsUserLoggedIn()
  })

  const isUserAuthenticated = computed(() => {
    return isUserLoggedIn && userToken && isXSRFEnabled
  })

  return { user, isUserLoggedIn, isUserAuthenticated, userToken, isXSRFEnabled }
}
