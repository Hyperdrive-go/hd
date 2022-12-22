/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@libs/ui']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
