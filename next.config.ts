import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;