/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blendibox.com.br', 'cdn.awsli.com.br','cf.shopee.com.br','img.icons8.com'],
  },
}

module.exports = nextConfig
