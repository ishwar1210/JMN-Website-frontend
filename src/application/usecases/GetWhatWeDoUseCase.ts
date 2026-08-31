import type { INavbarRepository } from '@/domain/interfaces/INavbarRepository'
import type { WhatWeDoItem } from '@/domain/entities/WhatWeDo'

export class GetWhatWeDoUseCase {
  private navbarRepository: INavbarRepository

  constructor(navbarRepository: INavbarRepository) {
    this.navbarRepository = navbarRepository
  }

  async execute(): Promise<WhatWeDoItem[]> {
    return this.navbarRepository.getWhatWeDo()
  }
}
