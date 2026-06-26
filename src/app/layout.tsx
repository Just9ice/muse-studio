import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musestudio.es"),
  title: "Muse Studio | Quality Building Finishes",
  description:
    "Muse Studio sources premium materials, provides expert guidance, and delivers professional installation for a seamless building finishes experience.",
  keywords: [
    "Muse Studio",
    "Building Finishes",
    "Premium Materials",
    "Architectural Finishes",
    "Construction",
    "Interior Design",
  ],
  openGraph: {
    title: "Muse Studio | Quality Building Finishes",
    description:
      "Muse Studio sources premium materials, provides expert guidance, and delivers professional installation for a seamless building finishes experience.",
    siteName: "Muse Studio",
    images: [
      {
        url: "/muse-favicon.png",
        width: 800,
        height: 600,
        alt: "Muse Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muse Studio | Quality Building Finishes",
    description:
      "Muse Studio sources premium materials, provides expert guidance, and delivers professional installation for a seamless building finishes experience.",
    images: ["/muse-favicon.png"],
  },
  icons: {
    icon: "/muse-favicon.png",
    shortcut: "/muse-favicon.png",
    apple: "/muse-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
