import { useState, useEffect, useMemo } from 'react'
import type { WhatWeDoItem } from '@/domain/entities/WhatWeDo'
import type { TechnologyItem } from '@/domain/entities/Technology'
import { NavbarRepository } from '@/infrastructure/repositories/NavbarRepository'
import { NavbarService } from '@/application/services/NavbarService'

export interface UseNavbarDataResult {
  whatWeDo: WhatWeDoItem[]
  technologies: TechnologyItem[]
  isLoading: boolean
  error: string | null
}

export const useNavbarData = (): UseNavbarDataResult => {
  const [whatWeDo, setWhatWeDo] = useState<WhatWeDoItem[]>([])
  const [technologies, setTechnologies] = useState<TechnologyItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const navbarService = useMemo(() => {
    const repository = new NavbarRepository()
    return new NavbarService(repository)
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      try {
        setIsLoading(true)
        const [whatWeDoData, technologiesData] = await Promise.all([
          navbarService.fetchWhatWeDo(),
          navbarService.fetchTechnologies(),
        ])

        if (isMounted) {
          setWhatWeDo(whatWeDoData)
          setTechnologies(technologiesData)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch navbar data')
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
  }, [navbarService])

  return { whatWeDo, technologies, isLoading, error }
}
