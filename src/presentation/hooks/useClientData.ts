import { useState, useEffect, useMemo } from 'react'
import type { ClientItem } from '@/domain/entities/Client'
import { ClientRepository } from '@/infrastructure/repositories/ClientRepository'
import { ClientService } from '@/application/services/ClientService'

export interface UseClientDataResult {
  clients: ClientItem[]
  isLoading: boolean
  error: string | null
}

export const useClientData = (): UseClientDataResult => {
  const [clients, setClients] = useState<ClientItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const clientService = useMemo(() => {
    const repository = new ClientRepository()
    return new ClientService(repository)
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      try {
        setIsLoading(true)
        const data = await clientService.fetchClients()
        if (isMounted) {
          setClients(data)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch clients')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, [clientService])

  return { clients, isLoading, error }
}
