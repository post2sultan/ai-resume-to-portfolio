import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this repository when the template lives inside a
  // larger workspace that also contains package-lock files.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
