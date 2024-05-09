/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'educacao.rs.gov.br',
        port: '',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'static.vakinha.com.br',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.correios.com.br',
        port: '',
        pathname:
          '/central-de-informacoes/newsletters/imagens/logo-correios.png/@@images/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'sjdigital.vtexassets.com',
        port: '',
        pathname:
          '/assets/vtex/assets-builder/sjdigital.store-theme/23.0.40/img/**',
      },
    ],
  },
};

export default nextConfig;
