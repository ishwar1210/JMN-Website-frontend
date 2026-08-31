import type { INavbarRepository } from '@/domain/interfaces/INavbarRepository'
import { GetWhatWeDoUseCase } from '../usecases/GetWhatWeDoUseCase'
import { GetTechnologiesUseCase } from '../usecases/GetTechnologiesUseCase'
import type { WhatWeDoItem } from '@/domain/entities/WhatWeDo'
import type { TechnologyItem } from '@/domain/entities/Technology'

export class NavbarService {
  private getWhatWeDoUseCase: GetWhatWeDoUseCase
  private getTechnologiesUseCase: GetTechnologiesUseCase

  constructor(repository: INavbarRepository) {
    this.getWhatWeDoUseCase = new GetWhatWeDoUseCase(repository)
    this.getTechnologiesUseCase = new GetTechnologiesUseCase(repository)
  }

  async fetchWhatWeDo(): Promise<WhatWeDoItem[]> {
    return this.getWhatWeDoUseCase.execute()
  }

  async fetchTechnologies(): Promise<TechnologyItem[]> {
    return this.getTechnologiesUseCase.execute()
  }
}
