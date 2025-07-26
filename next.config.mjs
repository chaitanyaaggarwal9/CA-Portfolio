
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "http://localhost:9002",
      "https://*.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
