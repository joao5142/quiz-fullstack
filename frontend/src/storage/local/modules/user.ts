import { USER_COLLECTION, USER_LOGGED_IN, USER_TOKEN, USER_THEME_COLLECTION } from '@/storage'
import { PosibleThemesTypes } from '~/theme'

const collectionStoredName = `${USER_COLLECTION}`

export function getUserTheme(): PosibleThemesTypes {
  try {
    const theme = JSON.parse(localStorage.getItem(USER_THEME_COLLECTION) || '')

    if (!theme) {
      return 'light'
    }
    return theme
  } catch (err) {
    return 'light'
  }
}

export function setUserTheme(value: PosibleThemesTypes) {
  const theme = localStorage.setItem(USER_THEME_COLLECTION, JSON.stringify(value))

  return theme
}
export async function setIsLoggedInToSession(value: any) {
  try {
    await localStorage.setItem(USER_LOGGED_IN, value)
  } catch (error) {
    throw error
  }
}

export function getUserToken() {
  try {
    const token = localStorage.getItem(USER_TOKEN)
    return token
  } catch (error) {
    console.log(error)
  }
}

export function setUserToken(tokenValue: string) {
  try {
    localStorage.setItem(USER_TOKEN, tokenValue)
  } catch (error) {
    console.error(error)
  }
}

export function removeUserToken() {
  try {
    localStorage.removeItem(USER_TOKEN)
  } catch (error) {
    console.error(error)
  }
}

export function getIsUserLoggedIn() {
  try {
    const user = localStorage.getItem(USER_LOGGED_IN) || []

    return user
  } catch (error) {
    throw error
  }
}

export function removeIsUserLoggedIn() {
  try {
    localStorage.removeItem(USER_LOGGED_IN)
  } catch (error) {
    throw error
  }
}

export async function setUserToLocalStorage(user: any) {
  try {
    await localStorage.setItem(collectionStoredName, JSON.stringify(user))
  } catch (error) {
    throw error
  }
}

export function getStoredUser() {
  try {
    const user = JSON.parse(localStorage.getItem(collectionStoredName) || '') || null

    return user
  } catch (error) {
    return null
  }
}

export function removeUser() {
  try {
    localStorage.removeItem(USER_COLLECTION)
  } catch (error) {
    throw error
  }
}
