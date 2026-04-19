import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking 방지 — Google Maps iframe 허용 위해 SAMEORIGIN
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // MIME sniffing 방지
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer 범위 최소화
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // HTTPS 고정 (Vercel/CF 자동 적용이지만 명시)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // DNS prefetch 허용
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // Permissions Policy — 카메라/마이크/geolocation/FLoC 차단
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
