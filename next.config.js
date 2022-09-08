/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blendibox.com.br', 'cdn.awsli.com.br','cf.shopee.com.br','img.icons8.com'],
    loader: "custom",
    disableStaticImages: true,
  },
  env: {
    PUBLIC_URL: "https://blendibox.github.io/reviews",
    assetPrefix: './'
  },
  experimental: {
    amp: {
        skipValidation: true
      }
    }
}

module.exports = nextConfig
