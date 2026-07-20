import { createClient } from '@supabase/supabase-js';

// Função para obter o URL do Supabase (tenta todas as variáveis possíveis)
const getSupabaseUrl = (): string => {
  // Variáveis do Vercel (com prefixo greng_)
  const grengUrl = process.env.greng_SUPABASE_URL;
  const grengPublicUrl = process.env.NEXT_PUBLIC_greng_SUPABASE_URL;
  
  // Variáveis padrão do Next.js
  const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  // Retorna a primeira variável válida
  if (grengUrl) return grengUrl;
  if (grengPublicUrl) return grengPublicUrl;
  if (publicUrl) return publicUrl;
  
  // Se nenhuma variável for encontrada, lança um erro
  throw new Error(
    'Variável de ambiente para URL do Supabase não encontrada. ' +
    'Configure uma das seguintes variáveis: ' +
    'greng_SUPABASE_URL, NEXT_PUBLIC_greng_SUPABASE_URL, ou NEXT_PUBLIC_SUPABASE_URL'
  );
};

// Função para obter a ANON KEY do Supabase (tenta todas as variáveis possíveis)
const getSupabaseAnonKey = (): string => {
  // Variáveis do Vercel (com prefixo greng_)
  const grengAnonKey = process.env.NEXT_PUBLIC_greng_SUPABASE_ANON_KEY;
  const grengPublishableKey = process.env.NEXT_PUBLIC_greng_PUBLISHABLE_KEY;
  
  // Variáveis padrão do Next.js
  const publicAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // Retorna a primeira variável válida
  if (grengAnonKey) return grengAnonKey;
  if (grengPublishableKey) return grengPublishableKey;
  if (publicAnonKey) return publicAnonKey;
  
  // Se nenhuma variável for encontrada, lança um erro
  throw new Error(
    'Variável de ambiente para ANON KEY do Supabase não encontrada. ' +
    'Configure uma das seguintes variáveis: ' +
    'NEXT_PUBLIC_greng_SUPABASE_ANON_KEY, NEXT_PUBLIC_greng_PUBLISHABLE_KEY, ou NEXT_PUBLIC_SUPABASE_ANON_KEY'
  );
};

// Função para criar o cliente Supabase no lado do cliente
let supabaseClient: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (typeof window === 'undefined') {
    // Server-side: não criar cliente aqui (usar createServerSupabaseClient)
    return null;
  }
  
  if (!supabaseClient) {
    const supabaseUrl = getSupabaseUrl();
    const supabaseAnonKey = getSupabaseAnonKey();
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  
  return supabaseClient;
};

// Função para criar o cliente Supabase no lado do servidor (API routes, server components)
export const createServerSupabaseClient = () => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();
  return createClient(supabaseUrl, supabaseAnonKey);
};
