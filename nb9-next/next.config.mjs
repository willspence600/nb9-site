/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Static export has no image optimization server; next/image still
    // provides lazy loading, priority hints, and layout-shift prevention.
    unoptimized: true,
  },
  env: {
    // Deterministic reference date so the build-time tour-date split matches
    // the client's first hydration render (Tour.jsx recomputes after mount).
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
};

export default nextConfig;
