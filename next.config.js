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

};

module.exports = nextConfig;
