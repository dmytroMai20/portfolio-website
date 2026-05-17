'use client'

import { useState } from 'react'
import Navigation from './Navigation'
import ThemeToggle from '../ui/ThemeToggle'

export default function HeaderClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <ThemeToggle />
    </div>
  )
}
