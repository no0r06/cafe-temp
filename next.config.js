/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // CRITICAL FOR NETLIFY
  reactStrictMode: true,
  images: { unoptimized: true },  // CRITICAL
}

module.exports = nextConfig
