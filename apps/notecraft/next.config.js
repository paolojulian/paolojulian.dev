const withPWA = require('next-pwa')({
  cacheOnFrontEndNav: true,
  cacheStartUrl: true,
  reloadOnOnline: true,
  dest: 'public',
  register: true,
  skipWaiting: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: false,
});

module.exports = nextConfig
