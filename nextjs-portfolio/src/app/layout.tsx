import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harshvardhan Lokhande — Mechanical Engineering Student | Software Developer",
  description:
    "Harshvardhan Lokhande — Mechanical Engineering Student, Software Developer, Product & Technology. Building at the intersection of engineering, software, and product management.",
  keywords: [
    "Harshvardhan Lokhande",
    "portfolio",
    "mechanical engineering",
    "software developer",
    "TwinSparkTech",
    "product management",
    "web development",
    "MITAOE",
  ],
  authors: [{ name: "Harshvardhan Lokhande" }],
  openGraph: {
    title: "Harshvardhan Lokhande — Portfolio",
    description:
      "Mechanical Engineering Student | Software Developer | Product & Technology",
    type: "website",
    url: "https://twinsparktech.online",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230a0a0b'/%3E%3Ctext x='32' y='42' font-family='Arial,sans-serif' font-weight='700' font-size='28' fill='%23fafafa' text-anchor='middle'%3EHL%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#0a0a0b] text-[#fafafa]">
        <div className="gradient-bg" />
        <div className="grid-pattern" />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
