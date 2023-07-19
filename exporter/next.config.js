const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const deps = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'exporter',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./header": "./src/components/Header",
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
