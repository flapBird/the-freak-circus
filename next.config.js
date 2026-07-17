const fs = require('fs');
const path = require('path');

try {
  const dataDir = path.join(__dirname, '.next/server/data');
  fs.mkdirSync(dataDir, { recursive: true });
  const src = path.join(__dirname, 'node_modules/geoip-lite/data/geoip-country.dat');
  const dest = path.join(dataDir, 'geoip-country.dat');
  if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
} catch (e) {}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.the-freakcircus.com' }],
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
      { source: '/contact', destination: '/en/contact' },
      { source: '/privacy', destination: '/en/privacy' },
      { source: '/terms', destination: '/en/terms' },
    ];
  },
};

module.exports = nextConfig;
