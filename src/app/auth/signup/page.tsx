'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Alert } from '@/components/ui/Alert'
import { getSupabaseClient } from '@/lib/supabase'

// Força SSR para evitar 404 no Vercel
export const dynamic = 'force-dynamic';

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [supabase, setSupabase] = useState<any>(null)

  useEffect(() => {
    setSupabase(getSupabaseClient())
  }, [])

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) {
      setError('Supabase client not initialized')
      return
    }
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const { error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role: 'generator',
          },
        },
      })

      if (authError) {
        setError(authError.message)
        return
      }

      router.push('/onboarding')
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao criar a conta. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-bgSecondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">GF</span>
            </div>
            <span className="text-2xl font-bold text-primary-green">GrenFlow</span>
          </div>
          <h2 className="text-3xl font-bold text-neutral-textPrimary">
            Crie sua conta
          </h2>
          <p className="mt-2 text-sm text-neutral-textSecondary">
            Junte-se a milhares de empresas que já automatizaram sua gestão de resíduos
          </p>
        </div>

        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <Input
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
            <Input
              label="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isLoading}
          >
            Criar Conta
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-neutral-textSecondary">
            Já tem uma conta?{' '}
            <Link
              href="/auth/login"
              className="font-medium text-primary-green hover:text-primary-blue transition-colors"
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
