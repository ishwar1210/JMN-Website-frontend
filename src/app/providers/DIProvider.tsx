import React, { type ReactNode } from 'react'
import { DIContext } from './DIContext'

export const DIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DIContext.Provider value={{}}>
      {children}
    </DIContext.Provider>
  )
}
