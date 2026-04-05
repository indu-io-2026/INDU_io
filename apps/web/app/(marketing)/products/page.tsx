"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Headphones,
  Target,
  Workflow,
  Calendar,
  BarChart3,
  Plug,
  Layers,
  LayoutTemplate,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
  }),
};

const categories = ["All", "Sales", "Support", "Operations", "Platform"];

const products = [
  {
    icon: Bot,
    name: "AI Sales Agent",
    desc: "Autonomous agent that qualifies leads, enriches CRM data, and triggers personalized outreach sequences — 24/7.",
    category: "Sales",
    outcome: "+40% close rate",
    tags: ["AI Agent", "CRM", "Email"],
    color: "#FF7A00",
  },
  {
    icon: Headphones,
    name: "AI Support Agent",
    desc: "Multi-channel AI that resolves support tickets instantly, escalates intelligently, and learns from every interaction.",
    category: "Support",
    outcome: "60% auto-resolved",
    tags: ["AI Agent", "Chat", "Email"],
    color: "#3B82F6",
  },
  {
    icon: Target,
    name: "Lead Qualification System",
    desc: "Real-time scoring engine that evaluates lead quality, intent signals, and buying readiness to prioritize your pipeline.",
    category: "Sales",
    outcome: "3x pipeline quality",
    tags: ["Scoring", "Analytics"],
    color: "#FF7A00",
  },
  {
    icon: Workflow,
    name: "Workflow Automation Engine",
    desc: "Visual workflow builder that automates complex multi-step business processes with conditional logic and branching.",
    category: "Operations",
    outcome: "80% less manual work",
    tags: ["Automation", "Logic"],
    color: "#8B5CF6",
  },
  {
    icon: Calendar,
    name: "Appointment Booking AI",
    desc: "AI-powered scheduling that handles availability, time zones, reminders, and rescheduling — without back-and-forth.",
    category: "Sales",
    outcome: "Zero scheduling friction",
    tags: ["Calendar", "AI"],
    color: "#22C55E",
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboard",
    desc: "Real-time operational intelligence with custom KPIs, trend analysis, and AI-generated insights for decision making.",
    category: "Operations",
    outcome: "Real-time visibility",
    tags: ["Analytics", "BI"],
    color: "#3B82F6",
  },
  {
    icon: Plug,
    name: "Integration Engine",
    desc: "Universal connector that syncs data across 200+ tools — CRM, ERP, communication, and custom APIs — in real time.",
    category: "Platform",
    outcome: "200+ integrations",
    tags: ["API", "Sync"],
    color: "#FF7A00",
  },
  {
    icon: Layers,
    name: "SaaS MVP Builder",
    desc: "Rapid prototyping system for AI-powered SaaS products — from concept to deployed MVP in weeks, not months.",
    category: "Platform",
    outcome: "10x faster launch",
    tags: ["SaaS", "MVP"],
    color: "#8B5CF6",
  },
  {
    icon: LayoutTemplate,
    name: "Automation Templates",
    desc: "Pre-built workflow templates for common business processes — onboarding, invoicing, reporting, and 50+ more.",
    category: "Operations",
    outcome: "Deploy in hours",
    tags: ["Templates", "Quick Start"],
    color: "#22C55E",
  },
  {
    icon: Sparkles,
    name: "Internal AI Dashboard",
    desc: "Employee-facing AI tools for data lookup, report generation, task management, and internal knowledge queries.",
    category: "Operations",
    outcome: "Self-service AI",
    tags: ["Internal", "Dashboard"],
    color: "#3B82F6",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-200px", left: "-100px", opacity: 0.35 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Product Ecosystem</div>
          </motion.div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}>
            The complete <span className="gradient-text">AI automation</span> platform
          </motion.h1>
          <motion.p className="body-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ maxWidth: 560, margin: "0 auto" }}>
            An ecosystem of intelligent products that work together to automate every layer of your business.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Tabs */}
          <div className="flex-center" style={{ marginBottom: "3rem" }}>
            <div className="tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            className="grid-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((prod, i) => {
                const Icon = prod.icon;
                return (
                  <motion.div
                    key={prod.name}
                    className="card"
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `${prod.color}15`,
                          border: `1px solid ${prod.color}40`,
                          color: prod.color,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="badge badge-orange" style={{ fontSize: "0.7rem" }}>{prod.category}</span>
                    </div>

                    <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{prod.name}</h3>
                    <p className="body-md" style={{ flex: 1, marginBottom: "1.25rem" }}>{prod.desc}</p>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                      {prod.tags.map((t) => (
                        <span key={t} className="badge badge-gray" style={{ fontSize: "0.7rem" }}>{t}</span>
                      ))}
                    </div>

                    {/* Outcome + CTA */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        <CheckCircle size={14} color={prod.color} />
                        <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: prod.color }}>{prod.outcome}</span>
                      </div>
                      <Link
                        href="/contact"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        Learn More <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
              Need a custom product? <span className="gradient-text">We build it.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: 500, margin: "0 auto 2rem" }}>
              If our ecosystem doesn&apos;t cover your exact use case, our engineers will design and deploy a custom AI system for you.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Discuss Your Needs <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
