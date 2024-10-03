const path = require('path');

// You must set this line to your own website for PRODUCTION builds

// const website = 'http://localhost:3020'; // You must set this line to your own website for PRODUCTION builds
// const website = 'https://development.fidio.ca';
const website = 'https://www.fidio.ca';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
