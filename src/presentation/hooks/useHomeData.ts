import { useState, useEffect, useMemo } from 'react'
import type { HomeDataItem } from '@/domain/entities/HomeData'
import { HomeRepository } from '@/infrastructure/repositories/HomeRepository'
import { HomeService } from '@/application/services/HomeService'

export interface UseHomeDataResult {
  homeData: HomeDataItem | null
  isLoading: boolean
  error: string | null
}

export const useHomeData = (): UseHomeDataResult => {
  const [homeData, setHomeData] = useState<HomeDataItem | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const homeService = useMemo(() => {
    const repository = new HomeRepository()
    return new HomeService(repository)
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      try {
        setIsLoading(true)
        const data = await homeService.fetchHomeData()
        if (isMounted) {
          setHomeData(data)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch home data')
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
  }, [homeService])

  return { homeData, isLoading, error }
}
