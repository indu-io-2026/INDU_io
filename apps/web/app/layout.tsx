import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INDU — Deploy AI Systems That Run Your Business",
    template: "%s | INDU",
  },
  description:
    "INDU deploys intelligent AI systems, autonomous agents, and automated workflows that replace manual work, optimize operations, and scale your business. Enterprise-grade AI infrastructure.",
  keywords: [
    "AI automation",
    "AI agents",
    "workflow automation",
    "enterprise AI",
    "business automation",
    "AI systems",
    "intelligent automation",
    "INDU",
  ],
  authors: [{ name: "INDU" }],
  creator: "INDU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indu.io",
    siteName: "INDU",
    title: "INDU — Deploy AI Systems That Run Your Business",
    description:
      "Automate workflows, deploy AI agents, and scale operations intelligently. Enterprise-grade AI infrastructure for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "INDU — Deploy AI Systems That Run Your Business",
    description:
      "Automate workflows, deploy AI agents, and scale operations intelligently.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
