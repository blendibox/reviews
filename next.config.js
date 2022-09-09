/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blendibox.com.br', 'cdn.awsli.com.br','cf.shopee.com.br','img.icons8.com'],
    loader: "custom",
    disableStaticImages: true,
  },
}

module.exports = nextConfig

/*const nextConfig = {
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
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    )
    return config
  },
}

module.exports = nextConfig*/
