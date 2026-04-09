"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

function TwitterIcon(props: any) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width={props.size || 24} height={props.size || 24} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width={props.size || 24} height={props.size || 24} {...props}>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width={props.size || 24} height={props.size || 24} {...props}>
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

const footerNav = {
  Platform: [
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Integrations", href: "/architecture" },
    { label: "Architecture", href: "/architecture" },
    { label: "Security", href: "/trust" },
  ],
  Company: [
    { label: "Why INDU", href: "/why-indu" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Deploy: [
    { label: "Strategy Audit", href: "/pricing" },
    { label: "Pilot System", href: "/pricing" },
    { label: "Enterprise", href: "/pricing" },
    { label: "Book a Call", href: "/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--footer-bg)",
        borderTop: "1px solid var(--border)",
        paddingTop: "80px",
        paddingBottom: "40px",
        color: "#94A3B8",
      }}
    >
      <div className="container">
        {/* Top section */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/horizontalwithname.png" alt="INDU.IO Logo" style={{ height: "100%", width: "auto", objectFit: "contain", borderRadius: "6px" }} />
              </div>
            </Link>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                maxWidth: "300px",
                marginBottom: "1.5rem",
              }}
            >
              Deploy intelligent AI systems that automate, optimize, and scale
              your entire business operations.
            </p>

            {/* Newsletter */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "0 0.875rem",
                  gap: "0.5rem",
                }}
              >
                <Mail size={14} style={{ color: "#536179" }} />
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email for newsletter"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#F8FAFC",
                    fontSize: "0.875rem",
                    padding: "0.625rem 0",
                    flex: 1,
                  }}
                />
              </div>
              <button className="btn btn-primary btn-sm" style={{ background: "linear-gradient(135deg, #FF7A00, #FF9A3C)", color: "#fff" }}>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: TwitterIcon, href: "#", label: "Twitter" },
                { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { icon: GithubIcon, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-icon"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group}>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#536179",
                  marginBottom: "1.25rem",
                }}
              >
                {group}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{
                        color: "#94A3B8",
                        fontSize: "0.9rem",
                        transition: "color 0.2s ease",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            marginTop: "4rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#536179", fontSize: "0.8125rem" }}>
            © 2025 INDU.IO — Intelligent Digital Universe. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="footer-link"
                style={{
                  color: "#536179",
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 0;
        }
        .footer-link:hover { color: #F8FAFC !important; }
        .social-icon:hover {
          border-color: rgba(255,122,0,0.4) !important;
          color: #FF7A00 !important;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
