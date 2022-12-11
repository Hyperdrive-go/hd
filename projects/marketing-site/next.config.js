/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
  i18n: {
    // providing the locales supported by your application
   locales: ["en-US", "vi-VN"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
