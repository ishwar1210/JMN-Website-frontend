import { useState, useEffect } from 'react'

export const useScroll = (threshold = 10): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isScrolled
}
