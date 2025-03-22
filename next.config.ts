import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    // รองรับการทำงานของ Next.js Image Optimization บน Vercel
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // เพิ่มค่า compiler options เพื่อเพิ่มประสิทธิภาพ
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // เพิ่มการกำหนดค่า distDir ถ้าต้องการเปลี่ยนชื่อโฟลเดอร์ build (ไม่จำเป็นต้องเปลี่ยน)
  // distDir: 'build',
  
  // ปิดการใช้งาน React StrictMode เนื่องจากอาจมีการ render ซ้ำซ้อนใน development mode
  // ถ้าต้องการเปิดใช้งาน StrictMode ให้เปลี่ยนเป็น true
  reactStrictMode: false,
};

export default nextConfig;
