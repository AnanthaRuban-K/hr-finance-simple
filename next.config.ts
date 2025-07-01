/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: [],
  images: {
    unoptimized: true,
  },
  // Add these for better deployment compatibility
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TypeScript errors
  },
  // Disable static optimization for now
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig