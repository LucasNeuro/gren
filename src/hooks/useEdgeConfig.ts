'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook simplificado para evitar erros no deploy
 * (Edge Config pode não estar configurado no Vercel)
 */
export function useEdgeConfig() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para verificar manutenção (sempre retorna false para evitar bloqueios)
  const checkMaintenance = useCallback(
    async () => {
      return false; // Desabilita a verificação de manutenção
    },
    []
  );

  return {
    config: null,
    loading,
    error,
    checkMaintenance,
    // Funções dummy para evitar erros
    getCompany: async () => null,
    checkFeature: async () => false,
    getPricingData: async () => null,
    getWasteTypesData: async () => [],
  };
}
