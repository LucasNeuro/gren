'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getEdgeConfig,
  getCompanyConfig,
  getComplianceConfig,
  isFeatureEnabled,
  isMaintenanceActive,
  getPricing,
  getWasteTypes,
  type GrenFlowConfig,
} from '@/lib/edgeConfig';

/**
 * Hook para acessar configurações do Edge Config no lado do cliente
 */
export function useEdgeConfig() {
  const [config, setConfig] = useState<Partial<GrenFlowConfig> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar configurações no mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        // Obter todas as configurações
        const data = await getEdgeConfig<Partial<GrenFlowConfig>>('');
        setConfig(data);
      } catch (err) {
        setError('Erro ao carregar configurações');
      } finally {
        setLoading(false);
      }
    };
    
    loadConfig();
  }, []);

  // Função para obter configuração de empresa
  const getCompany = useCallback(
    async (companyId: string) => {
      try {
        return await getCompanyConfig(companyId);
      } catch (err) {
        setError('Erro ao carregar configuração da empresa');
        return null;
      }
    },
    []
  );

  // Função para verificar feature flags
  const checkFeature = useCallback(
    async (feature: keyof GrenFlowConfig['features']) => {
      try {
        return await isFeatureEnabled(feature);
      } catch (err) {
        setError('Erro ao verificar feature');
        return false;
      }
    },
    []
  );

  // Função para verificar manutenção
  const checkMaintenance = useCallback(
    async () => {
      try {
        return await isMaintenanceActive();
      } catch (err) {
        setError('Erro ao verificar manutenção');
        return false;
      }
    },
    []
  );

  // Função para obter preços
  const getPricingData = useCallback(
    async () => {
      try {
        return await getPricing();
      } catch (err) {
        setError('Erro ao carregar preços');
        return null;
      }
    },
    []
  );

  // Função para obter tipos de resíduos
  const getWasteTypesData = useCallback(
    async () => {
      try {
        return await getWasteTypes();
      } catch (err) {
        setError('Erro ao carregar tipos de resíduos');
        return [];
      }
    },
    []
  );

  return {
    config,
    loading,
    error,
    getCompany,
    checkFeature,
    checkMaintenance,
    getPricingData,
    getWasteTypesData,
  };
}
