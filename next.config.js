/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
};
