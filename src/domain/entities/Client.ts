export interface ClientItem {
  id: number
  client_name: string
  logo_image?: string
  created_at?: string
}

export interface ClientResponse {
  success: boolean
  data: ClientItem[]
}
