/**
 * Middleware para o GrenFlow (versão simplificada)
 * 
 * Este middleware:
 * 1. Adiciona headers de segurança
 * 2. Verifica autenticação para rotas protegidas
 */

import { NextResponse, type NextRequest } from 'next/server';

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
  '/not-found',
];

// Caminhos que exigem autenticação
const PROTECTED_PATHS = [
  '/dashboard',
  '/generator/*',
  '/operator/*',
  '/admin/*',
  '/onboarding',
  '/marketplace',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. Criar response
  const response = NextResponse.next();
  
  // 2. Adicionar headers de segurança
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // 3. Verificar autenticação para rotas protegidas
  const isPublicPath = PUBLIC_PATHS.some(path => 
    pathname === path || pathname.startsWith(path.replace('*', ''))
  );
  
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname === path || pathname.startsWith(path.replace('*', ''))
  );
  
  if (isProtectedPath && !isPublicPath) {
    // Verificar se o usuário está autenticado (via cookie do Supabase)
    const token = request.cookies.get('sb-access-token')?.value ||
                 request.cookies.get('next-auth.session-token')?.value;
    
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
