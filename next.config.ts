
// import { withPayload } from "@payloadcms/next/withPayload";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default withPayload(nextConfig);


import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // MOVED TO TOP LEVEL (not in experimental anymore)
  serverExternalPackages: ['pino', 'thread-stream'],
  
  webpack: (config, { isServer }) => {
    // Exclude test files from being bundled
    config.module.rules.push({
      test: /\.test\.(js|mjs|ts|tsx)$/,
      use: 'ignore-loader',
    });
    
    config.module.rules.push({
      test: /node_modules\/thread-stream\/(test|bench).*\.(js|mjs)$/,
      use: 'ignore-loader',
    });

    return config;
  },
};

export default withPayload(nextConfig);