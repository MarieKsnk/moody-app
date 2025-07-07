import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ik.imagekit.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
