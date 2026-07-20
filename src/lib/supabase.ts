import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.greng_SUPABASE_URL || 'https://abinbufatfqqfcfyqzpx.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_greng_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5idWZhdGZxcWZjZnlxenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MDcyNjcsImV4cCI6MjEwMDA4MzI2N30.Pp_Sn73Sl3q2a6h9fG4BL1nHehj9mpIcv6en-BAXnbw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
