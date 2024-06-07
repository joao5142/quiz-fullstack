import Cookies from 'js-cookie'

import { USER_XSRF } from '@/storage'

export function removeXSRFToken() {
  try {
    Cookies.remove(USER_XSRF)
  } catch (error) {
    throw error
  }
}
export function isXSRFExpirated() {
  const myCookieValue = Cookies.get(USER_XSRF)

  if (myCookieValue) {
    return true
  } else {
    return false
  }
}
