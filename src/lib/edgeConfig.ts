/**
 * Configurações padrão para o GrenFlow (simplificado para evitar erros no deploy)
 * 
 * NOTA: Este arquivo foi simplificado para evitar dependências do @vercel/edge-config
 * que podem não estar configuradas no projeto.
 */

// Tipos para as configurações do GrenFlow
export interface GrenFlowConfig {
  maintenance: {
    active: boolean;
    message: string;
  };
  
  features: {
    blockchain: boolean;
    aiDiagnostic: boolean;
    realTimeTracking: boolean;
    marketplace: boolean;
  };
}

/**
 * Configurações padrão (fallback caso o Edge Config não esteja disponível)
 */
const defaultConfig: Partial<GrenFlowConfig> = {
  maintenance: {
    active: false,
    message: 'Sistema em manutenção. Volte mais tarde.',
  },
  features: {
    blockchain: false,
    aiDiagnostic: false,
    realTimeTracking: false,
    marketplace: false,
  },
};

/**
 * Obtém uma configuração específica (sempre retorna o valor padrão)
 */
export async function getEdgeConfig<T = any>(key: string): Promise<T | null> {
  // Retorna o valor padrão para evitar erros
  return (defaultConfig as any)[key] || null;
}

/**
 * Obtém todas as configurações do GrenFlow (retorna o padrão)
 */
export async function getGrenFlowConfig(): Promise<Partial<GrenFlowConfig> | null> {
  return defaultConfig;
}

/**
 * Funções específicas para o GrenFlow (todas retornam valores padrão)
 */

// Obter configuração de uma empresa
export async function getCompanyConfig(companyId: string) {
  return null;
}

// Obter configurações de compliance de um estado
export async function getComplianceConfig(state: string) {
  return null;
}

// Verificar se uma feature está ativa
export async function isFeatureEnabled(feature: keyof GrenFlowConfig['features']) {
  return defaultConfig.features?.[feature] || false;
}

// Verificar se o sistema está em manutenção
export async function isMaintenanceActive() {
  return defaultConfig.maintenance?.active || false;
}

// Obter preços
export async function getPricing() {
  return null;
}

// Obter tipos de resíduos
export async function getWasteTypes() {
  return [];
}
