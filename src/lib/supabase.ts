import { createClient } from '@supabase/supabase-js'

// Função para criar o cliente Supabase no lado do cliente
let supabaseClient: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (typeof window === 'undefined') {
    // Server-side: não criar cliente aqui (usar createServerSupabaseClient)
    return null
  }
  
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 
      process.env.NEXT_PUBLIC_greng_SUPABASE_URL || 
      'https://abinbufatfqqfcfyqzpx.supabase.co'
    
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
      process.env.greng_SUPABASE_ANON_KEY ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5idWZhdGZxcWZjZnlxenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MDcyNjcsImV4cCI6MjEwMDA4MzI2N30.Pp_Sn73Sl3q2a6h9fG4BL1nHehj9mpIcv6en-BAXnbw'
    
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  
  return supabaseClient
}

// Função para criar o cliente Supabase no lado do servidor (API routes, server components)
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 
    process.env.NEXT_PUBLIC_greng_SUPABASE_URL || 
    'https://abinbufatfqqfcfyqzpx.supabase.co'
  
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
    process.env.greng_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5idWZhdGZxcWZjZnlxenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MDcyNjcsImV4cCI6MjEwMDA4MzI2N30.Pp_Sn73Sl3q2a6h9fG4BL1nHehj9mpIcv6en-BAXnbw'
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Cliente padrão para usar em componentes cliente
export const supabase = getSupabaseClient()
