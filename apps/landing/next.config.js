/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://v1.paolojulian.dev/about',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: 'https://v1.paolojulian.dev/blogs',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: 'https://v1.paolojulian.dev/blogs/:slug*',
        permanent: true,
      },
      {
        source: '/apps/pomodoro',
        destination: 'https://v1.paolojulian.dev/apps/pomodoro',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.ctfassets.net',
        port: '',
      },
    ],
  },
};
