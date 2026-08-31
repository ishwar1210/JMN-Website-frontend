export interface TechnologyItem {
  id: number
  name: string
  slug: string
  created_at?: string
}

export interface TechnologyResponse {
  success: boolean
  data: TechnologyItem[]
}
