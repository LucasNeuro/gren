'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-textPrimary">
              Bem-vindo ao GrenFlow
            </h1>
            <p className="text-neutral-textSecondary mt-2">
              Gerencie seus resíduos de forma simples e eficiente.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-2">📄</div>
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-sm opacity-90">MTRs Emitidos</p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-2">🏷️</div>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-sm opacity-90">CDFs Gerados</p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-2">🚛</div>
              <h3 className="text-2xl font-bold">8</h3>
              <p className="text-sm opacity-90">Coletas Agendadas</p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-sm opacity-90">Compliance</p>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-textPrimary mb-6">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hoverable">
                <div className="text-4xl mb-4 text-primary-green">+</div>
                <h3 className="text-lg font-semibold mb-2">Emitir MTR</h3>
                <p className="text-neutral-textSecondary mb-4">
                  Crie um novo Manifesto de Transporte de Resíduos.
                </p>
                <Link href="/generator/mtrs/new">
                  <Button variant="primary">Emitir</Button>
                </Link>
              </Card>
              <Card className="p-6 hoverable">
                <div className="text-4xl mb-4 text-primary-blue">📅</div>
                <h3 className="text-lg font-semibold mb-2">Agendar Coleta</h3>
                <p className="text-neutral-textSecondary mb-4">
                  Agende uma nova coleta de resíduos.
                </p>
                <Link href="/generator/collections/new">
                  <Button variant="primary">Agendar</Button>
                </Link>
              </Card>
              <Card className="p-6 hoverable">
                <div className="text-4xl mb-4 text-secondary-green">👥</div>
                <h3 className="text-lg font-semibold mb-2">Operadores</h3>
                <p className="text-neutral-textSecondary mb-4">
                  Encontre operadores de resíduos certificados.
                </p>
                <Link href="/marketplace">
                  <Button variant="primary">Ver Marketplace</Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-textPrimary mb-6">
              Atividade Recente
            </h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">MTR-2026-00042</h3>
                    <p className="text-neutral-textSecondary">
                      Emitido em 19/07/2026
                    </p>
                  </div>
                  <Badge variant="active">Assinado</Badge>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-textSecondary">Gerador:</p>
                    <p className="font-medium">Oficina Auto Peças LTDA</p>
                  </div>
                  <div>
                    <p className="text-neutral-textSecondary">Operador:</p>
                    <p className="font-medium">EcoColeta Transportes</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Coleta Agendada</h3>
                    <p className="text-neutral-textSecondary">
                      25/07/2026 às 14:00
                    </p>
                  </div>
                  <Badge variant="pending">Pendente</Badge>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-textSecondary">Resíduo:</p>
                    <p className="font-medium">Óleo Lubrificante (500L)</p>
                  </div>
                  <div>
                    <p className="text-neutral-textSecondary">Operador:</p>
                    <p className="font-medium">EcoColeta Transportes</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
