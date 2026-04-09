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
  metadataBase: new URL("https://indu.io"),
  alternates: {
    canonical: '/',
  },
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('indu-theme');
                  if (t === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        {/* SEO: JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://indu.io/#organization",
                  "name": "INDU",
                  "url": "https://indu.io",
                  "logo": "https://indu.io/turborepo-dark.svg",
                  "sameAs": [
                    "https://twitter.com/indu_io",
                    "https://linkedin.com/company/indu-io",
                    "https://github.com/indu-io"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://indu.io/#website",
                  "url": "https://indu.io",
                  "name": "INDU",
                  "publisher": {
                    "@id": "https://indu.io/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://indu.io/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
