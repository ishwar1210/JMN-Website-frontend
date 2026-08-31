import type { HomeDataItem } from '../entities/HomeData'

export interface IHomeRepository {
  getHomeData(): Promise<HomeDataItem | null>
}
