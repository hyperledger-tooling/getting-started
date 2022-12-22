/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.acme.com', 'i.imgur.com', 'i.ibb.co', 'challenge.hyperledger.org'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
