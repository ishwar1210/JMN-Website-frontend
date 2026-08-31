import type { INavbarRepository } from '@/domain/interfaces/INavbarRepository'
import type { WhatWeDoItem, WhatWeDoResponse } from '@/domain/entities/WhatWeDo'
import type { TechnologyItem, TechnologyResponse } from '@/domain/entities/Technology'
import { HttpClient } from '../api/httpClient'
import { API_ENDPOINTS } from '../api/endpoints'

export class NavbarRepository implements INavbarRepository {
  private fallbackWhatWeDo: WhatWeDoItem[] = [
    { id: 1, name: 'Web Development', slug: 'web-development', category: 'Development' },
    { id: 2, name: 'Mobile App Development', slug: 'mobile-app-development', category: 'Development' },
    { id: 3, name: 'Cloud & DevOps', slug: 'cloud-devops', category: 'Infrastructure' },
    { id: 4, name: 'UI/UX Design', slug: 'ui-ux-design', category: 'Design' },
    { id: 5, name: 'Enterprise Solutions', slug: 'enterprise-solutions', category: 'Enterprise' },
  ]

  private fallbackTechnologies: TechnologyItem[] = [
    { id: 1, name: 'React & React Native', slug: 'react' },
    { id: 2, name: 'Node.js & Express', slug: 'nodejs' },
    { id: 3, name: 'TypeScript & JavaScript', slug: 'typescript' },
    { id: 4, name: 'Python & Django', slug: 'python' },
    { id: 5, name: 'Cloud Services (AWS/Azure)', slug: 'cloud' },
    { id: 6, name: 'Database Management', slug: 'database' },
  ]

  async getWhatWeDo(): Promise<WhatWeDoItem[]> {
    try {
      const response = await HttpClient.get<WhatWeDoResponse>(API_ENDPOINTS.WHAT_WE_DO)
      if (response && response.success && Array.isArray(response.data)) {
        return response.data
      }
      return this.fallbackWhatWeDo
    } catch (error) {
      console.warn(`GET ${API_ENDPOINTS.WHAT_WE_DO} failed or API offline, returning fallback data`, error)
      return this.fallbackWhatWeDo
    }
  }

  async getTechnologies(): Promise<TechnologyItem[]> {
    try {
      const response = await HttpClient.get<TechnologyResponse>(API_ENDPOINTS.TECHNOLOGIES)
      if (response && response.success && Array.isArray(response.data)) {
        return response.data
      }
      return this.fallbackTechnologies
    } catch (error) {
      console.warn(`GET ${API_ENDPOINTS.TECHNOLOGIES} failed or API offline, returning fallback data`, error)
      return this.fallbackTechnologies
    }
  }
}
