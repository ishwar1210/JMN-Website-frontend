import React, { useState, useEffect } from 'react'
import { AuthProvider } from './providers/AuthProvider'
import { DIProvider } from './providers/DIProvider'
import { HomePage, ContactPage } from '@/presentation/pages'
import '@/presentation/styles/css/main.css'

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const isContactPage =
    currentPath === '/contact' ||
    currentPath === '/contact-us' ||
    currentPath === '/get-in-touch'

  return (
    <DIProvider>
      <AuthProvider>
        {isContactPage ? <ContactPage /> : <HomePage />}
      </AuthProvider>
    </DIProvider>
  )
}

export default App
