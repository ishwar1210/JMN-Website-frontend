import type { IHomeRepository } from '@/domain/interfaces/IHomeRepository'
import type { HomeDataItem } from '@/domain/entities/HomeData'

export class GetHomeDataUseCase {
  private homeRepository: IHomeRepository

  constructor(homeRepository: IHomeRepository) {
    this.homeRepository = homeRepository
  }

  async execute(): Promise<HomeDataItem | null> {
    return this.homeRepository.getHomeData()
  }
}
