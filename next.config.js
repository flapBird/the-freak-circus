/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.the-freakcircus.com' }],
    // Serve images as-is instead of through the /_next/image optimizer.
    // Vercel's optimization quota is metered, and when it runs out every
    // image on the site returns 402 Payment Required. The sources under
    // public/ are already sized and compressed for the web, so the
    // optimizer bought little and cost reliability.
    unoptimized: true,
  },
  async redirects() {
    const locales = ['pt', 'fil', 'vi', 'es', 'id', 'zh'];
    return [
      { source: '/games/:path*', destination: '/fan-art', permanent: true },
      ...['en', ...locales].map(loc => ({ source: `/${loc}/games/:path*`, destination: loc === 'en' ? '/fan-art' : `/${loc}/fan-art`, permanent: true })),
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
      // Pages that shipped in earlier sitemaps (2026-07) and later moved. They
      // are no longer in the sitemap, but Google still holds them from the old
      // submissions, so they need a permanent redirect instead of a 404.
      { source: '/news', destination: '/updates', permanent: true },
      { source: '/walkthrough', destination: '/blog', permanent: true },
      { source: '/walkthrough/day-1', destination: '/blog/day-1-walkthrough-first-playthrough', permanent: true },
      { source: '/walkthrough/day-2', destination: '/blog/day-2-walkthrough-save-strategy', permanent: true },
      { source: '/walkthrough/day-3', destination: '/day-3', permanent: true },
      { source: '/walkthrough/:slug', destination: '/blog/:slug', permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: '/', destination: '/en' },
      { source: '/about', destination: '/en/about' },
      { source: '/characters', destination: '/en/characters' },
      // The static heights page must be listed before the dynamic slug rule,
      // otherwise /characters/heights resolves as a character slug.
      { source: '/characters/heights', destination: '/en/characters/heights' },
      { source: '/characters/:slug', destination: '/en/characters/:slug' },
      { source: '/wiki', destination: '/en/wiki' },
      { source: '/day-3', destination: '/en/day-3' },
      { source: '/download', destination: '/en/download' },
      { source: '/fan-art', destination: '/en/fan-art' },
      { source: '/community', destination: '/en/community' },
      { source: '/updates', destination: '/en/updates' },
      { source: '/blog', destination: '/en/blog' },
      { source: '/blog/:slug', destination: '/en/blog/:slug' },
      { source: '/contact', destination: '/en/contact' },
      { source: '/privacy', destination: '/en/privacy' },
      { source: '/terms', destination: '/en/terms' },
      { source: '/endings', destination: '/en/endings' },
      { source: '/save', destination: '/en/save' },
      { source: '/faq', destination: '/en/faq' },
    ];
  },
};

module.exports = nextConfig;
