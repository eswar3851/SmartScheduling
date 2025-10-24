'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'red' | 'blue' | 'purple'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blue')

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.className = `theme-${theme}`
    
    // Update CSS custom properties for primary colors
    const root = document.documentElement
    
    
    if (theme === 'red') {
      root.style.setProperty('--primary-50', '#fef2f2')
      root.style.setProperty('--primary-100', '#fee2e2')
      root.style.setProperty('--primary-200', '#fecaca')
      root.style.setProperty('--primary-300', '#fca5a5')
      root.style.setProperty('--primary-400', '#f87171')
      root.style.setProperty('--primary-500', '#ef4444')
      root.style.setProperty('--primary-600', '#dc2626')
      root.style.setProperty('--primary-700', '#b91c1c')
      root.style.setProperty('--primary-800', '#991b1b')
      root.style.setProperty('--primary-900', '#7f1d1d')
    } else if (theme === 'purple') {
      root.style.setProperty('--primary-50', '#faf5ff')
      root.style.setProperty('--primary-100', '#f3e8ff')
      root.style.setProperty('--primary-200', '#e9d5ff')
      root.style.setProperty('--primary-300', '#d8b4fe')
      root.style.setProperty('--primary-400', '#c084fc')
      root.style.setProperty('--primary-500', '#a855f7')
      root.style.setProperty('--primary-600', '#9333ea')
      root.style.setProperty('--primary-700', '#7c3aed')
      root.style.setProperty('--primary-800', '#6b21a8')
      root.style.setProperty('--primary-900', '#581c87')
    } else {
      // Blue theme (default)
      root.style.setProperty('--primary-50', '#eff6ff')
      root.style.setProperty('--primary-100', '#dbeafe')
      root.style.setProperty('--primary-200', '#bfdbfe')
      root.style.setProperty('--primary-300', '#93c5fd')
      root.style.setProperty('--primary-400', '#60a5fa')
      root.style.setProperty('--primary-500', '#3b82f6')
      root.style.setProperty('--primary-600', '#2563eb')
      root.style.setProperty('--primary-700', '#1d4ed8')
      root.style.setProperty('--primary-800', '#1e40af')
      root.style.setProperty('--primary-900', '#1e3a8a')
    }
    
    
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
