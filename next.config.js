/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  env: {
    API_SERVER_HOST: process.env.API_SERVER_HOST,
  },
  images: {
    domains: ['via.placeholder.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;