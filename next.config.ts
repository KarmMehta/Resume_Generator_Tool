import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old contact URLs → new contact page
      { source: '/index.php/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },

      // (Optional) strip any legacy /index.php/ prefix site-wide
      { source: '/index.php/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
