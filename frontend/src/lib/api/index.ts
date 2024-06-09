import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { AppError } from '~/exceptions/general/AppError'
import { useLoadingStore } from '@/stores/loadingStore'
import { getUserToken } from '@/storage/local/modules/user'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
})

const requestHandler = (requestConfig: AdaptAxiosRequestConfig) => {
  try {
    const { setIsRequestLoading } = useLoadingStore()

    setIsRequestLoading(true)

    if (import.meta.client) {
      const token = getUserToken()

      if (token) {
        requestConfig.headers.Authorization = 'Bearer ' + token
      }
    }
  } catch (e) {}

  return requestConfig
}

const responseHandler = (response: AxiosResponse) => {
  const { setIsRequestLoading } = useLoadingStore()

  setIsRequestLoading(false)
  return response
}

axiosInstance.interceptors.request.use((requestConfig) => requestHandler(requestConfig))
axiosInstance.interceptors.response.use((response) => responseHandler(response))

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { setIsRequestLoading } = useLoadingStore()

    setIsRequestLoading(false)

    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(error)
    }
  }
)

export default axiosInstance
