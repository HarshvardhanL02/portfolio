import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harshvardhan Lokhande — Developer, Product Builder & Mechanical Engineering Student",
  description:
    "Personal portfolio of Harshvardhan Lokhande. Developer and technology builder combining software engineering, product workflows, and mechanical engineering fundamentals.",
  keywords: [
    "Harshvardhan Lokhande",
    "Developer",
    "Product Builder",
    "Mechanical Engineering",
    "TwinSparkTech",
    "CounselDesk",
    "Next.js",
    "Python",
    "MITAOE Pune",
  ],
  authors: [{ name: "Harshvardhan Lokhande" }],
  openGraph: {
    title: "Harshvardhan Lokhande — Developer & Product Builder",
    description:
      "Developer & Mechanical Engineering Student at MIT Academy of Engineering, Pune.",
    type: "website",
    url: "https://twinsparktech.online",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2309090b'/%3E%3Ctext x='32' y='42' font-family='sans-serif' font-weight='700' font-size='26' fill='%23a3ff5f' text-anchor='middle'%3EHL%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#09090b] text-[#f4f4f5] min-h-screen">
        {children}
      </body>
    </html>
  );
}
