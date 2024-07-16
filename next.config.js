/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  basePath: "/mohammed.jamil",
  
  output: "export",
  distDir: "out",
  images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
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
