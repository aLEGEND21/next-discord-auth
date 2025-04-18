import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Example value
      allowedOrigins: ["*"], // Example value
    },
  },
  images: {
    domains: ["cdn.discordapp.com"],
  },
};

export default nextConfig;
