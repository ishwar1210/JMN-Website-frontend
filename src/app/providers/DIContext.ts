import { createContext } from 'react'

export interface DIContextType {
  services?: Record<string, unknown>
}

export const DIContext = createContext<DIContextType | undefined>(undefined)
