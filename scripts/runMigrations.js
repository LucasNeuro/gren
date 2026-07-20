/**
 * Script para executar migrations no Supabase
 * Uso: node scripts/runMigrations.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Credenciais do Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 
  'https://abinbufatfqqfcfyqzpx.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5idWZhdGZxcWZjZnlxenB4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDUwNzI2NywiZXhwIjoyMTAwMDgzMjY3fQ.9cr5M3OBOAj0EySCpJRI_OStflFK1SdD1UUH4snl0Mg';

// Cria o cliente do Supabase com permissões de admin
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  db: {
    schema: 'public',
  },
});

// Função para executar SQL usando a API REST do Supabase
async function executeSQL(sql) {
  try {
    // Usa a API de query do Supabase
    const { data, error } = await supabase
      .from('pg_query')
      .select('*')
      .single();
    
    // Se não tiver a tabela pg_query, cria uma função temporária
    if (error) {
      // Tenta executar via RPC direto
      const { data: rpcData, error: rpcError } = await supabase
        .rpc('execute_sql', { query: sql })
        .single();
      
      if (rpcError) {
        console.error('❌ Erro ao executar SQL:', rpcError.message);
        return false;
      }
      return true;
    }
    
    return true;
  } catch (err) {
    console.error('❌ Erro na execução:', err.message);
    return false;
  }
}

// Função principal para executar migrations
async function runMigrations() {
  console.log('🚀 Iniciando migrations do GrenFlow...\n');
  
  const migrationsFile = path.join(__dirname, '../docs/supabase_migrations.sql');
  
  if (!fs.existsSync(migrationsFile)) {
    console.error('❌ Arquivo de migrations não encontrado:', migrationsFile);
    process.exit(1);
  }
  
  const sql = fs.readFileSync(migrationsFile, 'utf8');
  
  // Para o Supabase, é melhor executar tudo de uma vez via API HTTP
  console.log('📤 Enviando SQL para o Supabase...');
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        query: sql,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Erro na API:', errorData);
      return false;
    }
    
    console.log('✅ SQL enviado com sucesso!');
    return true;
  } catch (err) {
    console.error('❌ Erro ao enviar SQL:', err.message);
    return false;
  }
}

// Executa o script
runMigrations()
  .then(success => {
    if (success) {
      console.log('\n🎉 Migrations executadas com sucesso!');
      process.exit(0);
    } else {
      console.log('\n⚠️  Falha ao executar migrations.');
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('❌ Erro inesperado:', err);
    process.exit(1);
  });
