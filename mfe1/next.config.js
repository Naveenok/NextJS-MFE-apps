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
            mfe2: `mfe2@https://naveenok-upgraded-space-dollop-4qq54j454vx3qxx-3001.preview.app.github.dev/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
        })
      );
    return config;
  }

}

module.exports = nextConfig
