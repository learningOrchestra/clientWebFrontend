const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = () => {
  const env = {
    API_BASE_URL: process.env.API_BASE_URL,
  };
  return { env };
};

module.exports = withPlugins([withImages()], nextConfig());
