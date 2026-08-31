export interface WhatWeDoItem {
  id: number
  name: string
  slug: string
  category?: string
  created_at?: string
}

export interface WhatWeDoResponse {
  success: boolean
  data: WhatWeDoItem[]
}
