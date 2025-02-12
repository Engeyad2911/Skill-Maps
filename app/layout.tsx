import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google"; // Changed to a font that supports Arabic
import "./globals.css";
import type React from "react";

const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "700"] }); // Using an Arabic-compatible font

export const metadata: Metadata = {
  title: "SkillsMap - تعلم، طوّر، انطلق نحو مستقبلك",
  description: "منصة تعليمية للمهارات الرقمية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoArabic.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
