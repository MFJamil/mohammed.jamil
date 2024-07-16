/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/mohammed.jamil",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /*
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  
  */
};

module.exports = nextConfig;
