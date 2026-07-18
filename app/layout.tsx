import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";

import { ThemeInitScript } from "@/components/magicui/theme-init";
import "./globals.css";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Poppins({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ashwin Khatiwada",
    template: "%s · Ashwin Khatiwada",
  },
  description:
    "Personal portfolio of Ashwin Khatiwada — full-stack developer building thoughtful web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeInitScript />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} min-h-dvh font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
