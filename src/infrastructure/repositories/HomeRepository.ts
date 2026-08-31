import type { IHomeRepository } from '@/domain/interfaces/IHomeRepository'
import type { HomeDataItem, HomeDataResponse } from '@/domain/entities/HomeData'
import { HttpClient } from '../api/httpClient'
import { API_ENDPOINTS } from '../api/endpoints'

export class HomeRepository implements IHomeRepository {
  private fallbackHomeData: HomeDataItem = {
    id: 1,
    home_title: 'Welcome to JMN',
    home_desc: 'We build premium software solutions.',
    company_exp: 12,
    apps_dev: 50,
    project_dev: 200,
    countries_served: 12,
    client_satisfaction_percent: '99',
    talented_squad: 24,
  }

  async getHomeData(): Promise<HomeDataItem | null> {
    try {
      const response = await HttpClient.get<HomeDataResponse>(API_ENDPOINTS.HOME)
      if (response && response.success && Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0]
      }
      return this.fallbackHomeData
    } catch (error) {
      console.warn(`GET ${API_ENDPOINTS.HOME} failed, returning fallback home data`, error)
      return this.fallbackHomeData
    }
  }
}
