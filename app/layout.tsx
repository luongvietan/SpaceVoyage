import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
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
          href="/Flow_delpmaspu_1.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
