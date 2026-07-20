import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Força SSR para a página raiz

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="active" className="mb-4">
                Nova Versão 2.0
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestão de Resíduos <span className="text-primary-blue">Simplificada</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Automatize a emissão de MTR, CDF e rastreie seus resíduos em tempo real com tecnologia blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button variant="secondary" size="lg">
                    Comece Grátis
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="tertiary" size="lg" className="text-white border border-white/30 hover:bg-white/10">
                    Ver Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary-green to-primary-blue rounded-xl flex items-center justify-center">
                  <span className="text-6xl">📄 → 🚛 → ♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-textPrimary mb-4">
              O Problema
            </h2>
            <p className="text-xl text-neutral-textSecondary">
              80% das empresas não emitem MTR corretamente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold mb-2">Multas</h3>
              <p className="text-neutral-textSecondary">
                Multas de até R$ 50 milhões por não conformidade com a legislação ambiental.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Burocracia</h3>
              <p className="text-neutral-textSecondary">
                Processos manuais e demorados para emissão de documentos.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold mb-2">Fraudes</h3>
              <p className="text-neutral-textSecondary">
                Risco de fraudes em documentos físicos e falta de rastreabilidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-20 bg-neutral-bgSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-textPrimary mb-4">
              A Solução
            </h2>
            <p className="text-xl text-neutral-textSecondary">
              Automatize tudo com GrenFlow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p className="text-neutral-textSecondary">
                Garanta conformidade com a legislação ambiental automaticamente.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Rastreamento</h3>
              <p className="text-neutral-textSecondary">
                Acompanhe seus resíduos em tempo real do gerador ao destino final.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
              <p className="text-neutral-textSecondary">
                Documentos imutáveis e auditáveis na blockchain Polygon.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-textPrimary mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-neutral-textSecondary">
              Em 3 passos simples
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="text-4xl mb-4 text-primary-green">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Diagnóstico Automático</h3>
              <p className="text-neutral-textSecondary">
                Responda um rápido questionário e descubra suas obrigações legais.
              </p>
            </Card>
            <Card className="p-8">
              <div className="text-4xl mb-4 text-primary-green">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Emissão de MTR em 1 Clique</h3>
              <p className="text-neutral-textSecondary">
                Gere seus Manifestos de Transporte de Resíduos automaticamente.
              </p>
            </Card>
            <Card className="p-8">
              <div className="text-4xl mb-4 text-primary-green">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Rastreamento em Tempo Real</h3>
              <p className="text-neutral-textSecondary">
                Acompanhe a coleta e destino final dos seus resíduos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="features" className="py-20 bg-neutral-bgSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-textPrimary mb-4">
              Recursos
            </h2>
            <p className="text-xl text-neutral-textSecondary">
              Tudo o que você precisa para gerenciar seus resíduos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-lg font-semibold mb-2">MTR Digital</h3>
              <p className="text-sm opacity-90">
                Emissão automática de Manifestos de Transporte de Resíduos.
              </p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-4">🏳️</div>
              <h3 className="text-lg font-semibold mb-2">CDF Automático</h3>
              <p className="text-sm opacity-90">
                Geração automática de Certificados de Destinação Final.
              </p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-4">🚛</div>
              <h3 className="text-lg font-semibold mb-2">Roteamento Inteligente</h3>
              <p className="text-sm opacity-90">
                Otimização de rotas para coletas de resíduos.
              </p>
            </Card>
            <Card variant="statistics" className="p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Tokenização Blockchain</h3>
              <p className="text-sm opacity-90">
                Documentos imutáveis na blockchain Polygon.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Revolucionar sua Gestão de Resíduos?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Comece hoje mesmo e garanta conformidade, rastreabilidade e eficiência.
          </p>
          <Link href="/auth/signup">
            <Button variant="secondary" size="lg">
              Comece Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
