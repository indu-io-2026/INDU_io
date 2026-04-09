"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Workflow,
  Layers,
  Plug,
  ShoppingCart,
  Headphones,
  Settings,
  Users,
  Shield,
  Zap,
  BarChart3,
  Lock,
  Globe,
  Server,
  CheckCircle,
  TrendingUp,
  Clock,
  ChevronRight,
  Sparkles,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { HeroViz } from "@/components/ui/hero-viz";
import { LiveSystemPreview } from "@/components/ui/live-system-preview";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { caseStudies } from "../../data/case-studies";
import Image from "next/image";

/* ── Animation helpers — VARIED, not identical ─────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
} as any;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
} as any;

const slideRight = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
} as any;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
} as any;

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

/* ── Data ─────────────────────────────────────────── */
const logos = [
  "TechFlow", "Axiom", "ScaleOps", "NexGen", "PulseAI",
  "Quantum", "VeloCity", "Praxis",
];

const coreSystems = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that handle sales, support, and operations without human intervention.",
    stat: "60% reduction in support tickets",
    color: "var(--accent-orange)",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end automated workflows that replace manual processes across your organization.",
    stat: "40+ hrs saved per week",
    color: "var(--accent-blue)",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    desc: "Custom-built AI-powered platforms tailored to your industry and business model.",
    stat: "10x faster operations",
    color: "var(--accent-purple)",
  },
  {
    icon: Plug,
    title: "Integration Engine",
    desc: "Seamless connections to CRM, ERP, APIs, and 200+ tools in your existing stack.",
    stat: "200+ integrations",
    color: "var(--accent-green)",
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    label: "Sales",
    title: "AI-Powered Sales Engine",
    desc: "Qualify leads in real-time, auto-route to the right rep, and close 40% more deals with zero manual follow-up.",
    metric: "+40%",
    metricLabel: "close rate increase",
  },
  {
    icon: Headphones,
    label: "Support",
    title: "Autonomous Customer Support",
    desc: "Deploy AI agents that resolve 60% of tickets instantly, escalate intelligently, and learn from every interaction.",
    metric: "60%",
    metricLabel: "tickets resolved by AI",
  },
  {
    icon: Settings,
    label: "Operations",
    title: "Operational Intelligence",
    desc: "Automate approvals, reporting, and resource allocation. Your back-office runs itself.",
    metric: "10x",
    metricLabel: "faster processing",
  },
  {
    icon: Users,
    label: "Internal",
    title: "Internal Systems & Tooling",
    desc: "Build internal dashboards, data pipelines, and employee-facing AI tools that eliminate manual busywork.",
    metric: "80%",
    metricLabel: "less manual work",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We map your workflows, identify automation opportunities, and quantify ROI potential.",
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "Our engineers design the AI system — agents, workflows, integrations — tailored to your stack.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    desc: "We build, test, and deploy your system in 2–6 weeks with zero disruption to operations.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    desc: "Continuous monitoring, optimization, and expansion. Your system gets smarter over time.",
  },
];

const integrations = [
  "Salesforce", "HubSpot", "Slack", "Stripe", "Zapier",
  "OpenAI", "Notion", "Airtable", "Google Cloud", "AWS",
  "Twilio", "Intercom", "Jira", "GitHub", "PostgreSQL", "MongoDB",
];

const trustSignals = [
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II compliant infrastructure with end-to-end encryption." },
  { icon: Server, title: "99.9% Uptime SLA", desc: "Distributed systems with auto-failover and real-time monitoring." },
  { icon: Lock, title: "Data Privacy", desc: "GDPR-ready. Your data never trains our models. Full sovereignty." },
  { icon: Globe, title: "Global Scale", desc: "Edge computing across regions for sub-100ms response times." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════  HERO  ═══════════════ */}
      <section
        className="section-lg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="glow-blob glow-blob-orange"
          style={{ top: "-200px", right: "-100px", opacity: 0.5 }}
        />
        <div
          className="glow-blob glow-blob-blue"
          style={{ bottom: "-100px", left: "-150px", opacity: 0.3 }}
        />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid">
            {/* Left */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <div className="section-label">AI Infrastructure Platform</div>
              </motion.div>

              <motion.h1
                className="hero-title"
                variants={fadeUp}
                custom={1}
                style={{ marginBottom: "1.5rem" }}
              >
                Deploy AI Systems That{" "}
                <span className="gradient-text">Run Your Business</span>
              </motion.h1>

              <motion.p
                className="body-lg"
                variants={fadeUp}
                custom={2}
                style={{ maxWidth: "520px", marginBottom: "2.5rem" }}
              >
                Automate workflows, deploy autonomous AI agents, and scale
                operations with intelligent systems — no manual work required.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Book Strategy Call
                  <ArrowRight size={16} />
                </Link>
                <Link href="/solutions" className="btn btn-secondary btn-lg">
                  Explore Solutions
                </Link>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                variants={fadeUp}
                custom={4}
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {[
                  { value: 120, suffix: "+", label: "Workflows Deployed" },
                  { value: 40, suffix: "%", label: "Avg. Cost Reduction" },
                  { value: 10, suffix: "x", label: "Faster Operations" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="stat-number" style={{ fontSize: "1.75rem" }}>
                      <AnimatedCounter end={s.value} suffix={s.suffix} />
                    </div>
                    <div className="stat-label" style={{ fontSize: "0.8125rem" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Viz */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="card-glass"
              style={{ padding: "2rem", borderRadius: "20px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <Activity size={14} color="var(--accent-orange)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  live-workflow-engine
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.7rem",
                    color: "var(--accent-green)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent-green)",
                      display: "inline-block",
                      animation: "pulse-dot 1.5s ease-in-out infinite",
                    }}
                  />
                  Active
                </span>
              </div>
              <HeroViz />
            </motion.div>
          </div>
        </div>

        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════  SOCIAL PROOF — Styled logos  ═══════════════ */}
      <section style={{ paddingBottom: "80px" }}>
        <div className="container text-center">
          <p className="body-sm" style={{ marginBottom: "2rem" }}>
            Trusted by forward-thinking teams
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    padding: "0.5rem 2rem",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ═══════════════  CORE SYSTEMS — Staggered layout  ═══════════════ */}
      <motion.section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label" style={{ display: "inline-flex" }}>Core Systems</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              The building blocks of{" "}
              <span className="gradient-text-subtle">autonomous operations</span>
            </motion.h2>
            <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: "600px", margin: "1rem auto 0" }}>
              Four interconnected systems that replace manual work with intelligent automation.
            </motion.p>
          </div>

          <div className="grid-4">
            {coreSystems.map((sys, i) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={sys.title}
                  variants={scaleIn}
                  custom={i + 3}
                  className="card-accent"
                  style={{ textAlign: "left" }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `color-mix(in srgb, ${sys.color} 10%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${sys.color} 25%, transparent)`,
                      color: sys.color,
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="card-title" style={{ marginBottom: "0.75rem" }}>
                    {sys.title}
                  </h3>
                  <p className="body-md" style={{ marginBottom: "1.25rem" }}>
                    {sys.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: sys.color,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    <TrendingUp size={14} />
                    {sys.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════  PLATFORM IMPACT — Clean grid  ═══════════════ */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container text-center">
          <motion.div variants={fadeIn} custom={0}>
            <div className="section-label-minimal">Platform Impact</div>
          </motion.div>
          <motion.h2 className="section-title" variants={fadeUp} custom={1} style={{ marginBottom: "3.5rem" }}>
            Real results from intelligent systems
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="metrics-grid" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {[
              { value: 120, suffix: "+", label: "Autonomous workflows deployed" },
              { value: 40, suffix: "%", label: "Average cost reduction" },
              { value: 10, suffix: "x", label: "Faster operations" },
              { value: 98, suffix: "%", label: "System uptime" },
              { value: 200, suffix: "+", label: "Integrations supported" },
              { value: 2, suffix: "M+", label: "Tasks automated monthly" },
            ].map((m) => (
              <div className="metric-cell" key={m.label}>
                <div className="stat-number">
                  <AnimatedCounter end={m.value} suffix={m.suffix} />
                </div>
                <div className="stat-label">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════  USE CASES — Alternating editorial  ═══════════════ */}
      <motion.section
        className="section-editorial"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label-blue" style={{ display: "inline-flex" }}>Use Cases</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Intelligent automation for every function
            </motion.h2>
          </div>

          <div className="grid-2">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.label}
                  variants={slideRight}
                  custom={i + 2}
                  className="card"
                  style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                >
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="badge badge-orange" style={{ marginBottom: "0.625rem", display: "inline-flex" }}>
                      {uc.label}
                    </span>
                    <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>
                      {uc.title}
                    </h3>
                    <p className="body-md" style={{ marginBottom: "1rem" }}>
                      {uc.desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.75rem",
                          fontWeight: 800,
                          color: "var(--accent-orange)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {uc.metric}
                      </span>
                      <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                        {uc.metricLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════  HOW IT WORKS — Vertical Timeline  ═══════════════ */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label-minimal">Process</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              From audit to{" "}
              <span className="gradient-text">autonomous systems</span> in weeks
            </motion.h2>
            <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: 560, margin: "1rem auto 0" }}>
              A proven 4-step process to deploy AI systems that scale your operations.
            </motion.p>
          </div>

          <div className="timeline">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                className="timeline-item"
                variants={slideRight}
                custom={i + 3}
              >
                <div className="timeline-marker">
                  <div
                    className="timeline-dot"
                    style={{
                      background: "var(--accent-orange-dim)",
                      border: "2px solid var(--accent-orange-border)",
                      color: "var(--accent-orange)",
                    }}
                  >
                    {step.step}
                  </div>
                  {i < howItWorks.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>
                    {step.title}
                  </h3>
                  <p className="body-md">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════  LIVE SYSTEM PREVIEW  ═══════════════ */}
      <motion.section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label" style={{ display: "inline-flex" }}>Live System Preview</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              See <span className="gradient-text">AI automation</span> in action
            </motion.h2>
            <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: 560, margin: "1rem auto 0" }}>
              Watch how an INDU system processes a lead — from capture to CRM sync to personalized outreach — in seconds.
            </motion.p>
          </div>
          <motion.div variants={scaleIn} custom={3}>
            <LiveSystemPreview />
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════  INTEGRATIONS — Marquee  ═══════════════ */}
      <motion.section
        className="section-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container text-center">
          <motion.div variants={fadeUp} custom={0}>
            <div className="section-label-minimal">Integrations</div>
          </motion.div>
          <motion.h2 className="section-title" variants={fadeUp} custom={1} style={{ marginBottom: "1rem" }}>
            Plug into your stack
          </motion.h2>
          <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: 500, margin: "0 auto 3rem" }}>
            200+ native integrations. Connect every tool in your ecosystem.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {integrations.map((name) => (
              <span
                key={name}
                className="badge badge-gray"
                style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem", cursor: "default" }}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════  TRANSFORMATION ENGINE  ═══════════════ */}
      <motion.section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label" style={{ display: "inline-flex" }}>Transformation Engine</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Before vs{" "}
              <span className="gradient-text-subtle">after INDU</span>
            </motion.h2>
          </div>

          <motion.div variants={scaleIn} custom={2} style={{ maxWidth: 900, margin: "0 auto" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: "40%" }}>Area</th>
                  <th style={{ textAlign: "center" }}>Before</th>
                  <th style={{ textAlign: "center" }} className="highlight-col">With INDU</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lead Response Time", "4–6 hours", "< 30 seconds"],
                  ["Support Resolution", "Manual, 24hr avg", "60% auto-resolved"],
                  ["Workflow Processing", "Spreadsheets & email", "Fully automated"],
                  ["Data Entry", "8+ hrs/week per employee", "Zero manual entry"],
                  ["Reporting", "Weekly, manual", "Real-time dashboards"],
                  ["Scalability", "Linear (hire more)", "Exponential (deploy AI)"],
                ].map(([area, before, after]) => (
                  <tr key={area}>
                    <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>{area}</td>
                    <td style={{ textAlign: "center", color: "var(--text-muted)" }}>{before}</td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "var(--accent-orange)",
                        fontWeight: 600,
                      }}
                    >
                      {after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════  REAL SYSTEMS DEPLOYED  ═══════════════ */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label-blue" style={{ display: "inline-flex" }}>Proven Architectures</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Real deployed production systems
            </motion.h2>
          </div>

          <div className="grid-3">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <motion.div
                key={cs.slug}
                variants={fadeUp}
                custom={i + 2}
                className="card"
                style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden" }}
              >
                {/* Preview Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "var(--bg-tertiary)", borderBottom: "1px solid var(--border)" }}>
                  <Image
                    src={cs.images[0] || ''}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6rem", background: "linear-gradient(to top, var(--bg-card-solid), transparent)" }} />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.75rem", borderRadius: "100px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-green)" }} />
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 500, color: "rgba(255,255,255,0.9)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{cs.category}</span>
                  </div>
                </div>

                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{cs.title}</h3>
                  <div style={{ marginTop: "1rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", marginBottom: "1.5rem", flex: 1 }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-heading)", color: "var(--accent-orange)" }}>{cs.results[0]?.value || ''}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>{cs.results[0]?.label || ''}</div>
                  </div>
                  
                  <Link href={`/case-studies/${cs.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--accent-blue)", fontWeight: 500, fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>
                    <span>View System Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/case-studies" className="btn btn-secondary">
              View All Deployed Systems <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════  TRUST LAYER — Different layout  ═══════════════ */}
      <motion.section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }} className="trust-layout">
            <motion.div variants={fadeUp} custom={0}>
              <div className="section-label" style={{ display: "inline-flex" }}>Enterprise Ready</div>
              <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
                Built for enterprise trust
              </h2>
              <p className="body-lg" style={{ marginTop: "1rem" }}>
                Security, compliance, and reliability built into every layer of the platform.
              </p>
            </motion.div>

            <div className="grid-2" style={{ gap: "1rem" }}>
              {trustSignals.map((ts, i) => {
                const Icon = ts.icon;
                return (
                  <motion.div key={ts.title} variants={fadeUp} custom={i + 1} className="card-glass" style={{ padding: "1.5rem" }}>
                    <div
                      className="icon-box"
                      style={{
                        marginBottom: "1rem",
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, fontFamily: "var(--font-heading)", marginBottom: "0.375rem" }}>{ts.title}</h3>
                    <p className="body-md" style={{ fontSize: "0.9rem" }}>{ts.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .trust-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </motion.section>

      {/* ═══════════════  FINAL CTA  ═══════════════ */}
      <section
        className="section-lg"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, var(--bg-primary), var(--bg-secondary))",
        }}
      >
        <div className="glow-blob glow-blob-orange" style={{ top: "-150px", left: "50%", transform: "translateX(-50%)", opacity: 0.4 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
              Start Your Transformation
            </div>
            <h2
              className="hero-title"
              style={{
                maxWidth: "800px",
                margin: "0 auto 1.5rem",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              }}
            >
              Ready to replace manual work with{" "}
              <span className="gradient-text">intelligent systems</span>?
            </h2>
            <p className="body-lg" style={{ maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              Book a strategy call with our team. We&apos;ll audit your operations and show you exactly what INDU can automate.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book Strategy Call <ArrowRight size={16} />
              </Link>
              <Link href="/why-indu" className="btn btn-secondary btn-lg">
                Why INDU? <Sparkles size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
