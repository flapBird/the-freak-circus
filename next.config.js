const fs = require('fs');
const path = require('path');

// Ensure geoip database is available where geoip-lite expects it
try {
  const dataDir = path.join(__dirname, '.next/server/data');
  fs.mkdirSync(dataDir, { recursive: true });
  const src = path.join(__dirname, 'node_modules/geoip-lite/data/geoip-country.dat');
  const dest = path.join(dataDir, 'geoip-country.dat');
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
  }
} catch (e) {
  // geoip database not available, will fall back to Accept-Language
}

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.the-freakcircus.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
