/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if applicable
        hostname: 'pollinations.ai',
        port: '', // leave empty if not needed
        pathname: '/**', // match any path
      },
    ],
  },
};

export default nextConfig;