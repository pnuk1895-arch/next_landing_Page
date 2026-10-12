
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [65, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
