import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPages = process.env.GITHUB_PAGES === 'true' && repositoryName;
const isUserPagesRepository = repositoryName?.endsWith('.github.io');
const basePath = isGitHubPages && !isUserPagesRepository ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
