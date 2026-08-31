export const getImageUrl = (imagePath?: string): string => {
  if (!imagePath) return ''
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  const baseUrl =
    (typeof window !== 'undefined' && window.APP_CONFIG?.API_BASE_URL) ||
    import.meta.env.VITE_API_BASE_URL ||
    ''
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '')
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${cleanBaseUrl}${cleanPath}`
}
