/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.the-freakcircus.com' }],
  },
  async redirects() {
    const locales = ['pt', 'fil', 'vi', 'es', 'id', 'zh'];
    return [
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      ...locales.flatMap(loc => [
        { source: `/${loc}/${loc}`, destination: `/${loc}`, permanent: false },
        { source: `/${loc}/${loc}/:path*`, destination: `/${loc}/:path*`, permanent: false },
        { source: `/${loc}/characters/doctor`, destination: `/${loc}/characters/the-doctor`, permanent: true },
        { source: `/${loc}/characters/columbina`, destination: `/${loc}/wiki#columbina`, permanent: true },
        { source: `/${loc}/blog/what-is-the-freak-circus`, destination: `/${loc}/blog/current-prototype-guide`, permanent: true },
        { source: `/${loc}/blog/pierrot-route-guide`, destination: `/${loc}/blog/current-prototype-guide`, permanent: true },
        { source: `/${loc}/blog/harlequin-character-guide`, destination: `/${loc}/blog/day-3-rumor-checklist`, permanent: true },
      ]),
      { source: '/characters/doctor', destination: '/characters/the-doctor', permanent: true },
      { source: '/characters/columbina', destination: '/wiki#columbina', permanent: true },
      { source: '/blog/what-is-the-freak-circus', destination: '/blog/current-prototype-guide', permanent: true },
      { source: '/blog/pierrot-route-guide', destination: '/blog/current-prototype-guide', permanent: true },
      { source: '/blog/harlequin-character-guide', destination: '/blog/day-3-rumor-checklist', permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: '/', destination: '/en' },
      { source: '/about', destination: '/en/about' },
      { source: '/characters', destination: '/en/characters' },
      { source: '/characters/:slug', destination: '/en/characters/:slug' },
      { source: '/wiki', destination: '/en/wiki' },
      { source: '/day-3', destination: '/en/day-3' },
      { source: '/download', destination: '/en/download' },
      { source: '/games', destination: '/en/games' },
      { source: '/games/:slug', destination: '/en/games/:slug' },
      { source: '/community', destination: '/en/community' },
      { source: '/updates', destination: '/en/updates' },
      { source: '/blog', destination: '/en/blog' },
      { source: '/blog/:slug', destination: '/en/blog/:slug' },
      { source: '/contact', destination: '/en/contact' },
      { source: '/privacy', destination: '/en/privacy' },
      { source: '/terms', destination: '/en/terms' },
    ];
  },
};

module.exports = nextConfig;
