/** @type {import('next').NextConfig} */
const nextConfig = {
  // Força todas as páginas a serem dinâmicas (SSR)
  experimental: {
    // Desabilita o Static Site Generation (SSG) para todas as páginas
    forceDynamic: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
