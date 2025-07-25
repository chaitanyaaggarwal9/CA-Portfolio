/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep other experimental features here if needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // allowedDevOrigins is now a top-level experimental feature, not nested.
  allowedDevOrigins: [
    "https://*.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev",
  ],
};

export default nextConfig;
