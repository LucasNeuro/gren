/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita React Strict Mode
  reactStrictMode: true,
  
  // Configurações para imagens (Supabase, etc.)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abinbufatfqqfcfyqzpx.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  
  // Configurações para otimização
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configurações de experimental (se precisar)
  experimental: {
    // Habilita o novo App Router (já é padrão no Next.js 14)
    appDir: true,
  },
};

export default nextConfig;
