import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
