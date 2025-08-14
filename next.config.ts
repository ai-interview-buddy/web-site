import type { NextConfig } from "next";

const repo = "app-ai-interview-buddy";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

export default nextConfig;
