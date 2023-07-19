const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const deps = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'importer',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          exporter: `exporter@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        shared: {
          'bootstrap': {
            singleton: true,
            requiredVersion: deps['bootstrap'],
          },
        }
      })
    );

    return config;
  },
};

module.exports = nextConfig
