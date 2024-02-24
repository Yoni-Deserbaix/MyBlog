/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "botnation.ai",
      },
    ],
  },
};

export default nextConfig;
