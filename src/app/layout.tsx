import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة قافلة الغذاء لخدمات الإعاشة | Qafilat Alghidha Catering",
  description: "شركة قافلة الغذاء لخدمات الإعاشة - إعداد الوجبات المطهية والجافة وتشغيل مطابخ الفنادق الموسمية وإعاشة حجاج بيت الله الحرام بمكة والمشاعر المقدسة. معتمدة بشهادات ISO 22000 و HACCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
