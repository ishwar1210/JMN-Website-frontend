import type { IHomeRepository } from '@/domain/interfaces/IHomeRepository'
import { GetHomeDataUseCase } from '../usecases/GetHomeDataUseCase'
import type { HomeDataItem } from '@/domain/entities/HomeData'

export class HomeService {
  private getHomeDataUseCase: GetHomeDataUseCase

  constructor(repository: IHomeRepository) {
    this.getHomeDataUseCase = new GetHomeDataUseCase(repository)
  }

  async fetchHomeData(): Promise<HomeDataItem | null> {
    return this.getHomeDataUseCase.execute()
  }
}
