/**
 * Vercel Edge Config para o GrenFlow
 * 
 * O Edge Config permite armazenar configurações dinâmicas na borda (edge)
 * com latência ultra-baixa, ideal para:
 * - Configurações de empresas
 * - Feature flags
 * - Limites de uso
 * - Preços dinâmicos
 * - Mensagens do sistema
 */

import { get, set, del, getAll } from '@vercel/edge-config';

// Chave do Edge Config (será injetada pelo Vercel)
const EDGE_CONFIG_KEY = process.env.EDGE_CONFIG_KEY || 'ecfg_0wlb4kqgkhpkypbja2xgv9jhyxpt';

// Tipos para as configurações do GrenFlow
interface GrenFlowConfig {
  // Configurações globais
  maintenance: {
    active: boolean;
    message: string;
  };
  
  // Feature flags
  features: {
    blockchain: boolean;
    aiDiagnostic: boolean;
    realTimeTracking: boolean;
    marketplace: boolean;
  };
  
  // Configurações por empresa (chave: companyId)
  companies: Record<string, {
    name: string;
    theme: 'light' | 'dark' | 'system';
    maxMTRsPerMonth: number;
    maxCollectionsPerMonth: number;
    logoUrl?: string;
    primaryColor?: string;
    allowedWasteTypes: string[];
  }>;
  
  // Configurações de compliance por estado
  compliance: Record<string, {
    requiresPGRSS: boolean;
    requiresMTR: boolean;
    allowedWasteTypes: string[];
    maxStorageDays: number;
  }>;
  
  // Preços
  pricing: {
    base: number;
    perMTR: number;
    perCollection: number;
    perOperator: number;
  };
  
  // Tipos de resíduos padrão
  wasteTypes: string[];
  
  // Mensagens do sistema
  messages: {
    welcome: string;
    onboarding: string;
    complianceWarning: string;
  };
}

/**
 * Obtém uma configuração específica do Edge Config
 */
export async function getEdgeConfig<T = any>(key: string): Promise<T | null> {
  try {
    const value = await get(key);
    return value as T | null;
  } catch (error) {
    console.error('Erro ao obter configuração do Edge Config:', error);
    return null;
  }
}

/**
 * Obtém todas as configurações do GrenFlow
 */
export async function getGrenFlowConfig(): Promise<Partial<GrenFlowConfig> | null> {
  try {
    const config = await getAll();
    return config as Partial<GrenFlowConfig>;
  } catch (error) {
    console.error('Erro ao obter configurações do GrenFlow:', error);
    return null;
  }
}

/**
 * Atualiza uma configuração no Edge Config
 */
export async function setEdgeConfig(key: string, value: any): Promise<boolean> {
  try {
    await set(key, value);
    return true;
  } catch (error) {
    console.error('Erro ao atualizar configuração do Edge Config:', error);
    return false;
  }
}

/**
 * Remove uma configuração do Edge Config
 */
export async function deleteEdgeConfig(key: string): Promise<boolean> {
  try {
    await del(key);
    return true;
  } catch (error) {
    console.error('Erro ao remover configuração do Edge Config:', error);
    return false;
  }
}

/**
 * Funções específicas para o GrenFlow
 */

// Obter configuração de uma empresa
export async function getCompanyConfig(companyId: string) {
  return getEdgeConfig<GrenFlowConfig['companies'][string]>(`companies.${companyId}`);
}

// Atualizar configuração de uma empresa
export async function setCompanyConfig(
  companyId: string,
  config: Partial<GrenFlowConfig['companies'][string]>
) {
  return setEdgeConfig(`companies.${companyId}`, config);
}

// Obter configurações de compliance de um estado
export async function getComplianceConfig(state: string) {
  return getEdgeConfig<GrenFlowConfig['compliance'][string]>(`compliance.${state}`);
}

// Verificar se uma feature está ativa
export async function isFeatureEnabled(feature: keyof GrenFlowConfig['features']) {
  const features = await getEdgeConfig<GrenFlowConfig['features']>('features');
  return features?.[feature] || false;
}

// Verificar se o sistema está em manutenção
export async function isMaintenanceActive() {
  const maintenance = await getEdgeConfig<GrenFlowConfig['maintenance']>('maintenance');
  return maintenance?.active || false;
}

// Obter preços
export async function getPricing() {
  return getEdgeConfig<GrenFlowConfig['pricing']>('pricing');
}

// Obter tipos de resíduos
export async function getWasteTypes() {
  return getEdgeConfig<string[]>('wasteTypes');
}

/**
 * Middleware para injetar configurações do Edge Config nas requisições
 * 
 * Exemplo de uso em middleware.ts:
 * ```ts
 * import { NextResponse } from 'next/server';
 * import { getGrenFlowConfig } from '@/lib/edgeConfig';
 * 
 * export async function middleware(request: Request) {
 *   const config = await getGrenFlowConfig();
 *   const response = NextResponse.next();
 *   response.cookies.set('grenflow-config', JSON.stringify(config));
 *   return response;
 * }
 * ```
 */

export { EDGE_CONFIG_KEY };
