/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.the-freakcircus.com' }],
  },
  async redirects() {
    const locales = ['pt', 'fil', 'vi', 'es', 'id', 'zh'];
    return [
      ...locales.flatMap(loc => [
        { source: `/${loc}/${loc}`, destination: `/${loc}`, permanent: false },
        { source: `/${loc}/${loc}/:path*`, destination: `/${loc}/:path*`, permanent: false },
        { source: `/${loc}/characters/doctor`, destination: `/${loc}/characters/the-doctor`, permanent: true },
      ]),
      { source: '/characters/doctor', destination: '/characters/the-doctor', permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: '/', destination: '/en' },
      { source: '/about', destination: '/en/about' },
      { source: '/characters', destination: '/en/characters' },
      { source: '/characters/:slug', destination: '/en/characters/:slug' },
      { source: '/walkthrough', destination: '/en/walkthrough' },
      { source: '/walkthrough/:day', destination: '/en/walkthrough/:day' },
      { source: '/wiki', destination: '/en/wiki' },
      { source: '/community', destination: '/en/community' },
      { source: '/news', destination: '/en/news' },
      { source: '/news/:slug', destination: '/en/news/:slug' },
      { source: '/blog', destination: '/en/blog' },
      { source: '/blog/:slug', destination: '/en/blog/:slug' },
      { source: '/contact', destination: '/en/contact' },
      { source: '/privacy', destination: '/en/privacy' },
      { source: '/terms', destination: '/en/terms' },
    ];
  },
};

module.exports = nextConfig;
