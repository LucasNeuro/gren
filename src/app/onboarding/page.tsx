'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Força SSR para evitar 404 no Vercel

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-textPrimary mb-4">
            Bem-vindo ao GrenFlow!
          </h1>
          <p className="text-neutral-textSecondary mb-8">
            Complete seu cadastro para começar a usar o sistema.
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-neutral-textSecondary">
              Esta página será substituída pelo fluxo de onboarding completo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
