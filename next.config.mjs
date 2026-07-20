/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita React Strict Mode
  reactStrictMode: true,
  
  // Configurações para o Vercel
  output: 'standalone',
  
  // Permite imagens de domínios externos (Supabase, Blob Storage, etc.)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abinbufatfqqfcfyqzpx.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Permite imagens de data URLs (para logos, etc.)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configurações para otimização
  compiler: {
    // Habilita styled-components (se precisar)
    styledComponents: false,
    // Remove console.log em produção
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Redirecionamentos (opcional)
  async redirects() {
    return [
      // Exemplo: redireciona / para /home
      // {
      //   source: '/',
      //   destination: '/home',
      //   permanent: true,
      // },
    ];
  },
  
  // Headers (opcional)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
