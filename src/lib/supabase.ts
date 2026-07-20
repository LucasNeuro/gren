import { createClient } from '@supabase/supabase-js';

// Função para criar o cliente Supabase no lado do cliente
let supabaseClient: ReturnType<typeof createClient> | null = null;

// Função para obter o URL do Supabase (tenta todas as variáveis possíveis)
const getSupabaseUrl = (): string => {
  const grengUrl = process.env.greng_SUPABASE_URL;
  const grengPublicUrl = process.env.NEXT_PUBLIC_greng_SUPABASE_URL;
  const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  if (grengUrl) return grengUrl;
  if (grengPublicUrl) return grengPublicUrl;
  if (publicUrl) return publicUrl;
  
  return 'https://abinbufatfqqfcfyqzpx.supabase.co';
};

// Função para obter a ANON KEY do Supabase (tenta todas as variáveis possíveis)
const getSupabaseAnonKey = (): string => {
  const grengAnonKey = process.env.NEXT_PUBLIC_greng_SUPABASE_ANON_KEY;
  const grengPublishableKey = process.env.NEXT_PUBLIC_greng_PUBLISHABLE_KEY;
  const publicAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (grengAnonKey) return grengAnonKey;
  if (grengPublishableKey) return grengPublishableKey;
  if (publicAnonKey) return publicAnonKey;
  
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5idWZhdGZxcWZjZnlxenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MDcyNjcsImV4cCI6MjEwMDA4MzI2N30.Pp_Sn73Sl3q2a6h9fG4BL1nHehj9mpIcv6en-BAXnbw';
};

// Função para criar o cliente Supabase no lado do cliente
export const getSupabaseClient = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  if (!supabaseClient) {
    const url = getSupabaseUrl();
    const anonKey = getSupabaseAnonKey();
    supabaseClient = createClient(url, anonKey);
  }
  
  return supabaseClient;
};

// Função para criar o cliente Supabase no lado do servidor
export const createServerSupabaseClient = () => {
  const url = getSupabaseUrl();
  const anonKey = getSupabaseAnonKey();
  return createClient(url, anonKey);
};

// Exporta um cliente padrão para uso direto (se necessário)
export const supabase = createClient(getSupabaseUrl(), getSupabaseAnonKey());
