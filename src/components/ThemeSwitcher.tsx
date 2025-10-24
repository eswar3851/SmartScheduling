'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { Palette } from 'lucide-react'

const themes = [
  { name: 'red', label: 'Red', color: 'bg-red-500' },
  { name: 'blue', label: 'Blue', color: 'bg-blue-500' },
  { name: 'purple', label: 'Purple', color: 'bg-purple-500' },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: 'red' | 'blue' | 'purple') => {
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center space-x-2">
      <Palette className="w-5 h-5 text-gray-600" />
      <div className="flex space-x-1">
        {themes.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => handleThemeChange(themeOption.name)}
            className={`w-8 h-8 rounded-full ${themeOption.color} ${
              theme === themeOption.name
                ? 'ring-2 ring-offset-2 ring-gray-400'
                : 'opacity-60 hover:opacity-80'
            } transition-all duration-200`}
            title={`Switch to ${themeOption.label} theme`}
          />
        ))}
      </div>
    </div>
  )
}
