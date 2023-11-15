/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // for local build
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.homesapp.ru',

      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
