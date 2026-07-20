/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita o App Router (já é padrão no Next.js 14)
  experimental: {
    appDir: true,
  },
  // Configurações de imagem (otimização para o Vercel)
  images: {
    unoptimized: true, // Desabilita otimização de imagem (evita problemas com storage externo)
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
