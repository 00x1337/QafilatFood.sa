import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "قافلة الغذاء | حلول الإعاشة في مكة والمشاعر المقدسة", template: "%s | قافلة الغذاء" },
  description: "حلول إعاشة متكاملة للبعثات والفنادق والجهات في مكة والمشاعر المقدسة، بطاقة تشغيلية تصل إلى 18,000 وجبة يوميًا واعتمادات ISO 22000 وHACCP.",
  keywords: ["إعاشة مكة", "إعاشة الحج", "تشغيل مطابخ الفنادق", "وجبات الحجاج", "قافلة الغذاء"],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
