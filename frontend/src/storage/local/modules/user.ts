import { USER_COLLECTION, USER_PERFIL_THEME_COLLECTION, USER_THEME_COLLECTION } from '@/storage'
import { USER_LOGGED_IN } from '@/storage'
import { USER_TOKEN } from '~/storage'
import { PosibleThemesTypes, PerfilThemeTypes } from '~/theme'
import { UserSubscriptionStatusTypes } from '~/types/globals/subscription'

const collectionStoredName = `${USER_COLLECTION}`

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

export async function updateSubscriptionUserFieldLocalStorage(value: boolean) {
  try {
    const user = JSON.parse(localStorage.getItem(collectionStoredName) || '') || null

    if (user) {
      user.tem_assinatura = value
      user.em_periodo_trial = value
      await localStorage.setItem(collectionStoredName, JSON.stringify(user))
    }
  } catch (error) {
    throw error
  }
}

export async function updateSubscriptionStatusUserFieldLocalStorage(
  status: UserSubscriptionStatusTypes
) {
  try {
    const user = JSON.parse(localStorage.getItem(collectionStoredName) || '') || null

    if (user) {
      user.assinatura_status = status

      if (status === 'ATIVA') {
        user.tem_assinatura = true
      } else {
        user.tem_assinatura = false
      }

      await localStorage.setItem(collectionStoredName, JSON.stringify(user))
    }
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

export function getUserPerfilTheme(): PerfilThemeTypes | '' {
  const theme = JSON.parse(localStorage.getItem(USER_PERFIL_THEME_COLLECTION)!)

  if (!theme) {
    return 'linear-gradient(90deg, #99CED5 0%, #FFD4BF 100%)'
  }

  return theme
}

export function setUserPerfilTheme(value: PerfilThemeTypes) {
  const theme = localStorage.setItem(USER_PERFIL_THEME_COLLECTION, JSON.stringify(value))

  return theme
}
