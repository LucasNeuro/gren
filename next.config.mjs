/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Força SSR para todas as páginas
  experimental: {
    forceDynamic: true, // Isso é válido no Next.js 14.2+
  },
};

export default nextConfig;
