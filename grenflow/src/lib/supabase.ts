import { createClient } from '@supabase/supabase-js'

// Only create the client in the browser (client-side)
let supabase: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (typeof window === 'undefined') {
    // Server-side: return null or create a server-side client if needed
    return null
  }
  
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL and Anon Key must be provided')
    }
    
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  
  return supabase
}

// For server components, use this function
// It will only work in server components or API routes
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key must be provided')
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}
