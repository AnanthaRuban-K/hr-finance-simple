/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: [],
  images: {
    unoptimized: true,
  },
  experimental: {
    // Future experimental features can go here
  },
}

module.exports = nextConfig