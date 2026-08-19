/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All images are self-hosted in /public/images — no external domains needed.
    // Vercel's default image optimizer handles /public assets automatically.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
