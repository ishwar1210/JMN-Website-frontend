import type { WhatWeDoItem } from '../entities/WhatWeDo'
import type { TechnologyItem } from '../entities/Technology'

export interface INavbarRepository {
  getWhatWeDo(): Promise<WhatWeDoItem[]>
  getTechnologies(): Promise<TechnologyItem[]>
}
