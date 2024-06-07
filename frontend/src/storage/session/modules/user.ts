import { USER_LOGGED_IN } from '@/storage'

export async function setIsLoggedInToSession(value: boolean) {
  try {
    await sessionStorage.setItem(USER_LOGGED_IN, value)
  } catch (error) {
    throw error
  }
}

export function getIsUserLoggedIn() {
  try {
    const user = sessionStorage.getItem(USER_LOGGED_IN) || []

    return user
  } catch (error) {
    throw error
  }
}

export function removeIsUserLoggedIn() {
  try {
    sessionStorage.removeItem(USER_LOGGED_IN)
  } catch (error) {
    throw error
  }
}
