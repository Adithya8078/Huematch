/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "assets.myntassets.com",
      },
      {
        protocol: "https",
        hostname: "assets.myntassets.com",
      },
      {
        protocol: "http",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "http",
        hostname: "rukminim1.flixcart.com",
      },
      {
        protocol: "https",
        hostname: "rukminim1.flixcart.com",
      },
      {
        protocol: "http",
        hostname: "assets0.mirraw.com",
      },
      {
        protocol: "https",
        hostname: "assets0.mirraw.com",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "static.zara.net",
      },
      {
        protocol: "https",
        hostname: "static.zara.net",
      },
      {
        protocol:"http",
        hostname:"medias.utsavfashion.com"
      },
      {
        protocol:"https",
        hostname:"medias.utsavfashion.com",
      },
      {
        protocol:"http",
        hostname:"www.google.com",
      },
      {
        protocol:"https",
        hostname:"www.google.com",
      },
      {
        protocol:"http",
        hostname:"runawayjuno.com",
      },
      {
        protocol:"https",
        hostname:"runawayjuno.com",
      },
      {
        protocol:"http",
        hostname:"coincodecap.com",
      },
      {
        protocol:"https",
        hostname:"coincodecap.com",
      }
    ],
  },  
  webpack: (config) => {
    // Ensure Webpack does not fail on `node:` imports
    config.resolve.alias = {
      ...config.resolve.alias,
      assert: "assert",
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      assert: false, // If you don't need `assert`, set it to `false`
    };

    return config;
  },
};

export default nextConfig;
