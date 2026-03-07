import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Travel",
  description: "Cinematic hero for deep-space travel experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero_bg.jpeg" type="image/jpeg" />
        <link
          rel="preload"
          as="video"
          href="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
