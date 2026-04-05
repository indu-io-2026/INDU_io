"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, ChevronDown, ArrowRight, Zap } from "lucide-react";

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    description: "AI systems for every business function",
  },
  {
    label: "Products",
    href: "/products",
    description: "The full INDU platform ecosystem",
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Vertical-specific AI automation",
  },
  {
    label: "Why INDU",
    href: "/why-indu",
    description: "Traditional vs AI-native operations",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "ROI-driven deployment plans",
  },
];

const moreItems = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Architecture", href: "/architecture" },
  { label: "Resources", href: "/resources" },
  { label: "Trust & Security", href: "/trust" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          background: scrolled
            ? "rgba(11, 15, 25, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #FF7A00, #FF9A3C)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(255,122,0,0.4)",
              }}
            >
              <Zap size={18} fill="white" color="white" />
            </div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.25rem",
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              INDU
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "0.5rem 0.875rem",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  color: pathname === item.href
                    ? "var(--accent-orange)"
                    : "var(--text-secondary)",
                  background: pathname === item.href
                    ? "var(--accent-orange-dim)"
                    : "transparent",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    (e.target as HTMLElement).style.color = "#fff";
                    (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "0.5rem 0.875rem",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  color: "var(--text-secondary)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                More
                <ChevronDown
                  size={14}
                  style={{
                    transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              {moreOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(15, 23, 42, 0.98)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "0.5rem",
                    minWidth: "200px",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    zIndex: 100,
                  }}
                >
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "0.625rem 0.875rem",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        transition: "all 0.2s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="desktop-nav">
            <Link
              href="/contact"
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
            >
              Book Strategy Call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "0.5rem",
              cursor: "pointer",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="mobile-menu-btn"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(11, 15, 25, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            overflowY: "auto",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {[...navItems, ...moreItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  borderRadius: "10px",
                  color: pathname === item.href ? "var(--accent-orange)" : "var(--text-primary)",
                  background: pathname === item.href ? "var(--accent-orange-dim)" : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {item.label}
                <ArrowRight size={16} style={{ color: "var(--text-muted)" }} />
              </Link>
            ))}
          </nav>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <Link href="/contact" className="btn btn-primary"
              style={{ justifyContent: "center", display: "flex" }}>
              Book Strategy Call
            </Link>
            <Link href="/contact" className="btn btn-secondary"
              style={{ justifyContent: "center", display: "flex" }}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      {/* Header offset spacer */}
      <div style={{ height: "68px" }} />
    </>
  );
}
