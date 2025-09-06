// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Resume Generator | Create Professional Resumes Online",
  description:
    "Create professional resumes online with our free resume builder. Generate modern, professional resumes in minutes.",
  keywords:
    "resume generator, professional resume, online resume builder, create resume, job application, career",
  robots: "index, follow",
  openGraph: {
    title: "Resume Generator | Create Professional Resumes Online",
    description:
      "Create professional resumes online with our free resume builder. Generate modern, professional resumes in minutes.",
    url: "https://www.nexgenspark.com/",
    type: "website",
    locale: "en_US",
    siteName: "Resume Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Generator | Create Professional Resumes Online",
    description:
      "Create professional resumes online with our free resume builder. Generate modern, professional resumes in minutes.",
  },
  authors: [{ name: "NexGenSpark", url: "https://www.nexgenspark.com/" }],
  creator: "NexGenSpark",
  publisher: "NexGenSpark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head suppressHydrationWarning>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="UlQ9V-4-OUWO0qmMq_PccPPbM9M5s9WoNjavvwGaUo8"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Basic meta */}
        <meta name="language" content="en" />
        <meta name="author" content="NexGenSpark" />
        <meta name="copyright" content="© 2025 NexGenSpark" />
        <meta name="rating" content="General" />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2913132933024266"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
