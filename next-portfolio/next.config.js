/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = {
  reactStrictMode: true,
  // env 내용 추가
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig
