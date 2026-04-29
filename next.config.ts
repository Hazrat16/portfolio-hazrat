import type { NextConfig } from "next";

const isUserPage = process.env.GITHUB_REPOSITORY?.endsWith(".github.io");
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isUserPage ? "" : repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
};

export default nextConfig;
