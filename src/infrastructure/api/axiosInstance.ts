import axios from 'axios'

declare global {
  interface Window {
    APP_CONFIG?: {
      API_BASE_URL?: string
    }
  }
}

// Dynamically read runtime IP from window.APP_CONFIG (set in published config.js)
// or fallback to import.meta.env.VITE_API_BASE_URL or empty relative URL
const getBaseUrl = (): string => {
  if (typeof window !== 'undefined' && window.APP_CONFIG?.API_BASE_URL) {
    return window.APP_CONFIG.API_BASE_URL
  }
  return import.meta.env.VITE_API_BASE_URL || ''
}

export const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000,
})

// Dynamically verify baseURL before each request
axiosInstance.interceptors.request.use(
  config => {
    config.baseURL = getBaseUrl()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Response Error:', error?.response?.status || error?.message)
    return Promise.reject(error)
  }
)

export default axiosInstance
