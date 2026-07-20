'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Força renderização dinâmica para evitar 404 no Vercel
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Desabilita cache

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-textPrimary mb-4">
            Marketplace de Operadores
          </h1>
          <p className="text-neutral-textSecondary">
            Encontre operadores de resíduos certificados para sua empresa.
          </p>
          <p className="text-sm text-neutral-textSecondary mt-4">
            Funcionalidade em desenvolvimento.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
