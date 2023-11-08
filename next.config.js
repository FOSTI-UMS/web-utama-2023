/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'event.fostiums.org',
      },
    ],
  },
}

module.exports = nextConfig
