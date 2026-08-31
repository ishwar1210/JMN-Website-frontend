import type { IClientRepository } from '@/domain/interfaces/IClientRepository'
import type { ClientItem } from '@/domain/entities/Client'

export class ClientService {
  private clientRepository: IClientRepository

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  async fetchClients(): Promise<ClientItem[]> {
    return await this.clientRepository.getClients()
  }
}
