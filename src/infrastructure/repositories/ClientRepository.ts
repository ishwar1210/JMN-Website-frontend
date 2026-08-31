import type { IClientRepository } from '@/domain/interfaces/IClientRepository'
import type { ClientItem, ClientResponse } from '@/domain/entities/Client'
import { HttpClient } from '../api/httpClient'
import { API_ENDPOINTS } from '../api/endpoints'

export class ClientRepository implements IClientRepository {
  private fallbackClients: ClientItem[] = [
    { id: 1, client_name: 'SALGA' },
    { id: 2, client_name: 'SIEMENS' },
    { id: 3, client_name: 'TDK' },
    { id: 4, client_name: 'kirloskar' },
    { id: 5, client_name: 'iftas' },
    { id: 6, client_name: 'NABARD' },
    { id: 7, client_name: 'Bosch' },
    { id: 8, client_name: 'Honeywell' },
    { id: 9, client_name: 'Wipro' },
    { id: 10, client_name: 'ABB' },
    { id: 11, client_name: 'Tata' },
    { id: 12, client_name: 'L&T' },
  ]

  async getClients(): Promise<ClientItem[]> {
    try {
      const response = await HttpClient.get<ClientResponse>(API_ENDPOINTS.CLIENT)
      if (response && response.success && Array.isArray(response.data) && response.data.length > 0) {
        return response.data
      }
      return this.fallbackClients
    } catch (error) {
      console.warn(`GET ${API_ENDPOINTS.CLIENT} failed or API offline, returning fallback clients`, error)
      return this.fallbackClients
    }
  }
}
