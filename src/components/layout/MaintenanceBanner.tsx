'use client';

import React, { useEffect, useState } from 'react';
import { useEdgeConfig } from '@/hooks/useEdgeConfig';
import { Alert } from '../ui/Alert';

export const MaintenanceBanner: React.FC = () => {
  const { checkMaintenance, loading, error } = useEdgeConfig();
  const [isMaintenance, setIsMaintenance] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const check = async () => {
      const active = await checkMaintenance();
      setIsMaintenance(active);
      
      // Se estiver em manutenção, buscar a mensagem
      if (active) {
        const config = await import('@/lib/edgeConfig').then(m => m.getEdgeConfig('maintenance'));
        setMessage(config?.message || 'Sistema em manutenção. Volte mais tarde.');
      }
    };
    
    check();
  }, [checkMaintenance]);

  if (loading) return null;
  if (error) return <Alert variant="error">{error}</Alert>;
  if (!isMaintenance) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
};
