/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tell Next that every route lives under /commercial-pilot-license
  basePath: '/commercial-pilot-license',

  // 2. Prefix all _next assets (JS/CSS/etc.) with the same folder
  assetPrefix: '/commercial-pilot-license/',

  // 3. Leave your public/ folder assets alone—Next will auto‑prefix them
  images: {
    unoptimized: true,
    // when using <Image>, ensure you use the default loader so it respects basePath
    loader: 'default',
    path: '/_next/image',
  },

  output: 'export',
  distDir: 'out',
  trailingSlash: true, // optional, but can help if you're exporting static HTML
};

export default nextConfig;
