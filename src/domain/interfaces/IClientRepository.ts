import type { ClientItem } from '../entities/Client'

export interface IClientRepository {
  getClients(): Promise<ClientItem[]>
}
