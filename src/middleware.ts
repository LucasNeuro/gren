/**
 * Middleware para o GrenFlow
 * 
 * Este middleware:
 * 1. Verifica se o sistema está em manutenção
 * 2. Injeta configurações do Edge Config nos headers
 * 3. Redireciona para página de manutenção se necessário
 * 4. Adiciona headers de segurança
 */

import { NextResponse, type NextRequest } from 'next/server';
import { isMaintenanceActive, getGrenFlowConfig } from './lib/edgeConfig';

// Caminhos que não precisam de autenticação
const PUBLIC_PATHS = [
  '/',
  '/auth/login',
  '/auth/signup',
  '/auth/forgot-password',
  '/api/*',
  '/_next/*',
  '/favicon.ico',
  '/public/*',
];

// Caminhos que exigem autenticação
const PROTECTED_PATHS = [
  '/dashboard',
  '/generator/*',
  '/operator/*',
  '/admin/*',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. Verificar se o sistema está em manutenção
  const maintenanceActive = await isMaintenanceActive();
  
  if (maintenanceActive && !pathname.startsWith('/maintenance')) {
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  
  // 2. Obter configurações do Edge Config
  const config = await getGrenFlowConfig();
  
  // 3. Criar response
  const response = NextResponse.next();
  
  // 4. Adicionar configurações nos headers (para uso no cliente)
  if (config) {
    response.headers.set('x-grenflow-config', JSON.stringify(config));
  }
  
  // 5. Adicionar headers de segurança
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // 6. Verificar autenticação para rotas protegidas
  const isPublicPath = PUBLIC_PATHS.some(path => 
    pathname === path || pathname.startsWith(path.replace('*', ''))
  );
  
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname === path || pathname.startsWith(path.replace('*', ''))
  );
  
  if (isProtectedPath && !isPublicPath) {
    // Verificar se o usuário está autenticado (via cookie)
    const token = request.cookies.get('sb-access-token') || 
                 request.cookies.get('next-auth.session-token');
    
    if (!token) {
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
