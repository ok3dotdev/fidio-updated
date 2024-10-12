const path = require('path');

const website = `https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`; // You must set this line to your own website for PRODUCTION builds

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process?.env?.NEXT_PUBLIC_DEV === 'true' ? undefined : website,
  reactStrictMode: false, // Helps with debugging, but should be off to ensure runtime does not fire twice
  webpack: (config, { isServer }) => {
    // Add custom webpack configuration here
    // You can modify the `config` object as needed

    // Example: Add resolve alias for modules folder
    config.resolve.alias['/modules'] = path.join(__dirname, 'modules/');
    config.resolve.alias['/appServer'] = path.join(__dirname, 'appServer/');
    config.resolve.alias['/app.config'] = path.join(__dirname, 'app.config.js');
    config.resolve.alias['@/lib'] = path.join(__dirname, 'lib/');
    config.resolve.alias['@/components'] = path.join(__dirname, 'components/');
    config.resolve.alias['/customModules'] = path.join(
      __dirname,
      'customModules'
    );
    config.resolve.alias['@/emails'] = path.join(__dirname, 'emails/');
    config.resolve.alias['/styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['/layout'] = path.join(__dirname, 'layout/');

    // Example: Add Babel loader for JavaScript modules/functions
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

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(module.exports, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'hoke-5p',
  project: 'fidio',
  sentryUrl: 'https://sentry.io/',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
