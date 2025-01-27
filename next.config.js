/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    /// Add a rule to handle the canvas.node binary module
    // This rule tells webpack to handle files with the .node extension using the raw-loader
    config.module.rules.push({ test: /\.node$/, use: 'raw-loader' });
    
    // Exclude canvas from being processed by Next.js in the browser

    // This code executes only when webpack is bundling the client-side code (isServer is false, The canvas module is added to the externals array, which tells webpack not to bundle it into the client-side code.

    // WHY: The canvas library is a Node.js-only module that relies on native bindings, which won't work in a browser environment.
    if (!isServer) config.externals.push('canvas');
    return config;
  },
  images: {
    remotePatterns: [ {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',        
      },],
  },
};

module.exports = nextConfig;
