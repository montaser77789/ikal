import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // يسمح بكل المضيفات عبر http
      },
      {
        protocol: "https",
        hostname: "**", // يسمح بكل المضيفات عبر https
      },
    ],
  },
};

export default nextConfig;
