import React from 'react'
import { AuthProvider } from './providers/AuthProvider'
import { DIProvider } from './providers/DIProvider'
import { HomePage } from '@/presentation/pages'
import '@/presentation/styles/css/main.css'

export const App: React.FC = () => {
  return (
    <DIProvider>
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    </DIProvider>
  )
}

export default App
