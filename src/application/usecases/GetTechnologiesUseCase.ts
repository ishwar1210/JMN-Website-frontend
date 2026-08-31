import type { INavbarRepository } from '@/domain/interfaces/INavbarRepository'
import type { TechnologyItem } from '@/domain/entities/Technology'

export class GetTechnologiesUseCase {
  private navbarRepository: INavbarRepository

  constructor(navbarRepository: INavbarRepository) {
    this.navbarRepository = navbarRepository
  }

  async execute(): Promise<TechnologyItem[]> {
    return this.navbarRepository.getTechnologies()
  }
}
