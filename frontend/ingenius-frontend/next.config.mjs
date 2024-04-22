/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.myntassets.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;
