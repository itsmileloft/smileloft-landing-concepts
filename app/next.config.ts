import type { NextConfig } from "next";

const repoName = "smileloft-landing-concepts";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

// Exposed to client code so components can prefix asset paths (e.g. the
// header logo) that next/image doesn't automatically rewrite under
// `output: "export"` + `images.unoptimized`.
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    qualities: [60, 65, 70, 75, 80],
  },
};

export default nextConfig;
