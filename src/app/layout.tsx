import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { MaintenanceBanner } from '@/components/layout/MaintenanceBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GrenFlow - Gestão de Resíduos Simplificada',
  description: 'Automatize a emissão de MTR, CDF e rastreamento de resíduos com blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <MaintenanceBanner />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
