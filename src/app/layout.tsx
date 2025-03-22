import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "บ้านสวนวิถีธรรมชาติ | ผลิตภัณฑ์สมุนไพรไทย 100% จากธรรมชาติ",
  description: "ร้านจำหน่ายผลิตภัณฑ์สมุนไพรออร์แกนิคคุณภาพสูง ผลิตภัณฑ์ดูแลผิวพรรณ 100% จากธรรมชาติ โดย วิถีธรรมชาติ ออร์แกนิค",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
