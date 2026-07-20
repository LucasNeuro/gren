/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de imagem
  images: {
    unoptimized: true,
  },
  // Desabilita o SSG (Static Site Generation) para todas as páginas
  // e força SSR (Server-Side Rendering)
  output: 'standalone',
};

export default nextConfig;
