'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Força renderização dinâmica para evitar 404 no Vercel
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Desabilita cache

export default function NewCollectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-textPrimary mb-4">
            Agendar Nova Coleta
          </h1>
          <p className="text-neutral-textSecondary">
            Funcionalidade em desenvolvimento. Em breve você poderá agendar coletas de resíduos aqui.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
