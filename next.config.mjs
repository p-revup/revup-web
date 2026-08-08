/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {},
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
