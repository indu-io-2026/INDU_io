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
  metadataBase: new URL("https://indu.life"),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "INDU.IO — Deploy AI Systems That Run Your Business",
    template: "%s | INDU.IO",
  },
  description:
    "INDU.IO deploys intelligent AI systems, autonomous agents, and automated workflows that replace manual work, optimize operations, and scale your business. Enterprise-grade AI infrastructure.",
  keywords: [
    "AI automation",
    "AI agents",
    "workflow automation",
    "enterprise AI",
    "business automation",
    "AI systems",
    "intelligent automation",
    "INDU.IO",
  ],
  authors: [{ name: "INDU.IO" }],
  creator: "INDU.IO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indu.life",
    siteName: "INDU.IO",
    title: "INDU.IO — Deploy AI Systems That Run Your Business",
    description:
      "Automate workflows, deploy AI agents, and scale operations intelligently. Enterprise-grade AI infrastructure for modern businesses.",
  },
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: "summary_large_image",
    title: "INDU.IO — Deploy AI Systems That Run Your Business",
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
                  "@id": "https://indu.life/#organization",
                  "name": "INDU.IO",
                  "url": "https://indu.life",
                  "logo": "https://indu.life/LOGO.png",
                  "sameAs": [
                    "https://twitter.com/indu_io",
                    "https://linkedin.com/company/indu-io",
                    "https://github.com/indu-io"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://indu.life/#website",
                  "url": "https://indu.life",
                  "name": "INDU.IO",
                  "publisher": {
                    "@id": "https://indu.life/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://indu.life/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
