const path = require('path');

const website = 'http://localhost:3020'; // You must set this line to your own website
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: website,
  reactStrictMode: true,
  images: {
    domains: ['d2ib7gxb0luc1i.cloudfront.net', 'another-domain.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['/modules'] = path.join(__dirname, 'modules/');
    config.resolve.alias['/app.config'] = path.join(__dirname, 'app.config.js');
    config.resolve.alias['/styles'] = path.join(__dirname, 'src/styles');

    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
      // Add a rule to handle font files
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        },
      });
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig)
