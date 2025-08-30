import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Claude Code for UX Designers | Complete Development Guide",
  description: "Comprehensive guide for UX designers to build production applications using Claude Code, with integrations for Figma, GitHub, Supabase, and Vercel.",
  keywords: ["Claude Code", "UX Design", "AI Development", "Figma", "Next.js", "Full Stack"],
  authors: [{ name: "UX Design Guide" }],
  openGraph: {
    title: "Claude Code for UX Designers",
    description: "Complete Application Development Guide with Full Stack Integration",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code for UX Designers",
    description: "Complete Application Development Guide with Full Stack Integration",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
