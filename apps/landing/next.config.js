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
        source: '/blogs*',
        destination: 'https://v1.paolojulian.dev/blogs*',
        permanent: true,
      },
      {
        source: '/apps*',
        destination: 'https://v1.paolojulian.dev/apps*',
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
