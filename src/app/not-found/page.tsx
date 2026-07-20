'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-bgSecondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-textPrimary mb-4">404</h1>
        <p className="text-xl text-neutral-textSecondary mb-8">
          Página não encontrada
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}
