"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, ChevronDown, ArrowRight, Zap, Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/components/theme-provider";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Why INDU", href: "/why-indu" },
  { label: "Pricing", href: "/pricing" },
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
  const { theme, toggleTheme, mounted } = useThemeContext();

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
          background: scrolled ? "var(--header-bg-scrolled)" : "var(--header-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid var(--header-border)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
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
                background: "linear-gradient(135deg, var(--accent-orange), var(--accent-orange-glow))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--logo-glow)",
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
                color: "var(--text-primary)",
              }}
            >
              INDU
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
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
                    background: "var(--dropdown-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "0.5rem",
                    minWidth: "200px",
                    backdropFilter: "blur(20px)",
                    boxShadow: "var(--shadow-elevated)",
                    zIndex: 100,
                  }}
                >
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="dropdown-link"
                      style={{
                        display: "block",
                        padding: "0.625rem 0.875rem",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        transition: "all 0.2s ease",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            className="desktop-nav"
          >
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle theme"}
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              href="/contact"
              className="nav-link"
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
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
          <div style={{ display: "none", alignItems: "center", gap: "0.5rem" }} id="mobile-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "0.5rem",
                cursor: "pointer",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              id="mobile-menu-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
            background: "var(--mobile-menu-bg)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "1.5rem",
            borderTop: "1px solid var(--border)",
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
                  background: pathname === item.href ? "var(--accent-orange-dim)" : "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
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
        .nav-link:hover {
          color: var(--text-primary) !important;
          background: var(--bg-elevated) !important;
        }
        .dropdown-link:hover {
          color: var(--text-primary) !important;
          background: var(--bg-elevated) !important;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          #mobile-actions { display: flex !important; }
        }
      `}</style>

      {/* Header offset spacer */}
      <div style={{ height: "68px" }} />
    </>
  );
}
