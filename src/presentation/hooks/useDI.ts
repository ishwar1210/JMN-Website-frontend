import { useContext } from 'react'
import { DIContext, type DIContextType } from '@/app/providers/DIContext'

export const useDI = (): DIContextType => {
  const context = useContext(DIContext)
  if (!context) {
    throw new Error('useDI must be used within a DIProvider')
  }
  return context
}
