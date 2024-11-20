import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config: { module: { rules: { test: RegExp; use: string }[] } }) {
    config.module.rules.push({
      test: /\.tests\.tsx?$/,
      use: "ignore-loader", // Ignore test files during production build
    });
    return config;
  },
};

export default nextConfig;
