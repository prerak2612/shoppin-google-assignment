/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn2.gstatic.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  