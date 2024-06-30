/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'tobimobi',
    description: 'My store for my workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://heulenderwolf.github.io/kasm-registry/',
    contactUrl: 'https://github.com/heulenderwolf/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
