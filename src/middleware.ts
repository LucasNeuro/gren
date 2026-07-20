/**
 * Middleware para forçar SSR em todas as rotas
 * Isso garante que o Vercel não prerenderize páginas como estáticas
 */

import { NextResponse } from 'next/server';

export function middleware() {
  // Força SSR para todas as rotas
  const response = NextResponse.next();
  response.headers.set('x-vercel-ssr', 'true');
  return response;
}

export const config = {
  matcher: '/:path*', // Aplica a todas as rotas
};
