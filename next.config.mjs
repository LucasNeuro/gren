/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilita o Static Site Generation (SSG) para TODAS as páginas
  output: 'standalone',
  
  // Força Server-Side Rendering (SSR) para todas as páginas
  experimental: {
    // Desabilita o SSG e força SSR
    forceDynamic: true,
    // Garante que o App Router use SSR
    appDir: true,
  },
  
  // Configurações de imagem
  images: {
    unoptimized: true,
  },
  
  // Desabilita o cache de páginas estáticas
  cache: false,
};

export default nextConfig;
