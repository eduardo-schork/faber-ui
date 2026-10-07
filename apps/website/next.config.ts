import type { NextConfig } from 'next';

// A static export for GitHub Pages, which serves the site from a path named after the repository.
const isStaticExport = process.env.FABER_UI_STATIC_EXPORT === 'true';
const basePath = process.env.FABER_UI_BASE_PATH ?? '';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  ...(isStaticExport ? { basePath, output: 'export' as const, trailingSlash: true } : {}),
} satisfies NextConfig;

export default nextConfig;
