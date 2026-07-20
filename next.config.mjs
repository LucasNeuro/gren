/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilita o cache de páginas estáticas
  cache: false,
  
  // Configurações de imagem
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
