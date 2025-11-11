"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-pulse-soft">
              <span className="text-white font-bold text-lg"></span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Dapur Umi Kyana</h1>
              <p className="text-xs text-muted-foreground">Katering Istimewa</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <a href="#menu-carousel" className="text-foreground hover:text-primary transition-colors font-medium">
              Menu Mingguan
            </a>
            <a href="#all-menu-section" className="text-foreground hover:text-primary transition-colors font-medium">
              Seluruh Menu
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Kontak
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-slide-up">
            <a href="#menu-carousel" className="block text-foreground hover:text-primary transition-colors font-medium">
              Menu Mingguan
            </a>
            <a
              href="#all-menu-section"
              className="block text-foreground hover:text-primary transition-colors font-medium"
            >
              Seluruh Menu
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-medium">
              Kontak
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
