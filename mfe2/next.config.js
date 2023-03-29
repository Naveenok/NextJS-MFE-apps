/** @type {import('next').NextConfig} */
const
  { NextFederationPlugin }
    = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true, layers: true, };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe2',
        filename: 'static/chunks/remoteEntry.js',
        // extraOptions: {
        //   exposePages: true
        // },
        exposes: {
          './mfe2UI': './pages/index.js'
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
