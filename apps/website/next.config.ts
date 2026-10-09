import type { NextConfig } from 'next';

// A static export, which Vercel serves as plain files. The base path is for hosts that serve the
// site from a subpath.
const isStaticExport = process.env.FABER_UI_STATIC_EXPORT === 'true';
const basePath = process.env.FABER_UI_BASE_PATH ?? '';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  devIndicators: false,
  ...(isStaticExport ? { basePath, output: 'export' as const, trailingSlash: true } : {}),
} satisfies NextConfig;

export default nextConfig;
