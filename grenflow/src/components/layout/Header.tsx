import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GF</span>
            </div>
            <span className="text-xl font-bold text-primary-green">GrenFlow</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-neutral-textSecondary hover:text-primary-green transition-colors">
              Recursos
            </Link>
            <Link href="/#how-it-works" className="text-neutral-textSecondary hover:text-primary-green transition-colors">
              Como Funciona
            </Link>
            <Link href="/#pricing" className="text-neutral-textSecondary hover:text-primary-green transition-colors">
              Preços
            </Link>
            <Link href="/#testimonials" className="text-neutral-textSecondary hover:text-primary-green transition-colors">
              Depoimentos
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="tertiary" className="hidden sm:inline-block">
                Entrar
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="primary">
                Comece Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
