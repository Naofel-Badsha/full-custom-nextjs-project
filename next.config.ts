import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
