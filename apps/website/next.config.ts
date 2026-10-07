import type { NextConfig } from 'next';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    '@faber-ui/fonts',
    '@faber-ui/icons',
    '@faber-ui/react',
    '@faber-ui/themes',
    '@faber-ui/tokens',
    '@faber-ui/utilities',
  ],
} satisfies NextConfig;

export default nextConfig;
