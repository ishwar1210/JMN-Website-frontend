export interface HomeDataItem {
  id: number
  home_video?: string
  home_title?: string
  home_desc?: string
  company_exp: number
  apps_dev: number
  project_dev: number
  countries_served: number
  client_satisfaction_percent: string | number
  talented_squad: number
  updated_at?: string
}

export interface HomeDataResponse {
  success: boolean
  data: HomeDataItem[]
}
