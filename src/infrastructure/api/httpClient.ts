import { axiosInstance } from './axiosInstance'
import type { AxiosRequestConfig } from 'axios'

export class HttpClient {
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.get<T>(url, config)
    return response.data
  }

  static async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.post<T>(url, data, config)
    return response.data
  }

  static async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.put<T>(url, data, config)
    return response.data
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.delete<T>(url, config)
    return response.data
  }
}
