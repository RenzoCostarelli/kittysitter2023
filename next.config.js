/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
