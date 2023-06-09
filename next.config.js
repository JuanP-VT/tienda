/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "m.media-amazon.com",
      "i.ibb.co",
    ],
  },
  env: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    SESSION_CART_KEY: process.env.SESSION_CART_KEY,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  },
};
