const path = require('path');

// You must set this line to your own website for PRODUCTION builds

// const website = 'http://localhost:3020'; // You must set this line to your own website for PRODUCTION builds
const website = 'https://development.fidio.ca';
// const website = 'https://www.fidio.ca';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  // assetPrefix: website,
  reactStrictMode: false, // Helps with debugging, but should be off to ensure runtime does not fire twice
  images: {
    domains: [
      'd2ib7gxb0luc1i.cloudfront.net',
      'another-domain.com',
      'googleusercontent.com',
      'fidiohero.s3.ca-central-1.amazonaws.com',
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['/modules'] = path.join(__dirname, 'modules/');
    config.resolve.alias['/appServer'] = path.join(__dirname, 'appServer/');
    config.resolve.alias['/app.config'] = path.join(__dirname, 'app.config.js');
    config.resolve.alias['@/lib'] = path.join(__dirname, 'lib/');
    config.resolve.alias['@/components'] = path.join(__dirname, 'components/');
    config.resolve.alias['/customModules'] = path.join(
      __dirname,
      'customModules'
    );
    config.resolve.alias['@'] = path.join(__dirname, './');
    config.resolve.alias['/styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['/layout'] = path.join(__dirname, 'layout/');

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

module.exports = withBundleAnalyzer(nextConfig);
