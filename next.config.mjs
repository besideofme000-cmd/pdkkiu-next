/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ganti 'pdkkiu-next' dengan nama repo GitHub awak
  basePath: process.env.NODE_ENV === 'production' ? '/pdkkiu-next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pdkkiu-next/' : '',
  trailingSlash: true,
};

export default nextConfig;
