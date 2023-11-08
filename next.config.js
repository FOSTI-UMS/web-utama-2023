/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JOIN_US_DATETIME: process.env.JOIN_US_DATETIME,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'event.fostiums.org',
      },
    ],
  },
}

module.exports = nextConfig
