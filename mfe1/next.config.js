//  @type {import('next').NextConfig} 
const { NextFederationPlugin }
  = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    },
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mfe1',
          remotes: {
            mfe2: `mfe2@https://naveenok-laughing-space-cod-wvvp6r6pp6whvggr-3000.preview.app.github.dev/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
        })
      );
    return config;
  }

}

module.exports = nextConfig
