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

/* ── Animation helpers ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ───────────────────────────────────────────── */
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
    color: "#FF7A00",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end automated workflows that replace manual processes across your organization.",
    stat: "40+ hrs saved per week",
    color: "#3B82F6",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    desc: "Custom-built AI-powered platforms tailored to your industry and business model.",
    stat: "10x faster operations",
    color: "#8B5CF6",
  },
  {
    icon: Plug,
    title: "Integration Engine",
    desc: "Seamless connections to CRM, ERP, APIs, and 200+ tools in your existing stack.",
    stat: "200+ integrations",
    color: "#22C55E",
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
    desc: "We map your current workflows, identify automation opportunities, and quantify ROI potential.",
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
    desc: "Continuous monitoring, optimization, and expansion. Your AI system gets smarter over time.",
  },
];

const integrations = [
  "Salesforce", "HubSpot", "Slack", "Stripe", "Zapier",
  "OpenAI", "Notion", "Airtable", "Google Cloud", "AWS",
  "Twilio", "Intercom", "Jira", "GitHub", "PostgreSQL", "MongoDB",
];

const caseStudies = [
  {
    client: "SaaS Company",
    problem: "60+ hours/week on manual lead qualification",
    system: "AI Sales Agent + CRM Automation",
    result: "72% reduction in manual work",
    metric: "72%",
    color: "#FF7A00",
  },
  {
    client: "E-commerce Brand",
    problem: "Support team overwhelmed with 2000+ tickets/day",
    system: "AI Support Agent + Smart Routing",
    result: "58% tickets auto-resolved",
    metric: "58%",
    color: "#3B82F6",
  },
  {
    client: "Financial Services",
    problem: "Compliance workflows taking 5 days per case",
    system: "Workflow Automation + Decision Engine",
    result: "Processing reduced to 4 hours",
    metric: "96%",
    color: "#22C55E",
  },
];

const trustSignals = [
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II compliant infrastructure with end-to-end encryption at rest and in transit." },
  { icon: Server, title: "99.9% Uptime SLA", desc: "Distributed systems architecture with auto-failover and real-time monitoring." },
  { icon: Lock, title: "Data Privacy", desc: "GDPR-ready. Your data never trains our models. Full data sovereignty." },
  { icon: Globe, title: "Global Scale", desc: "Deploy across regions with edge computing for sub-100ms response times." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════ */}
      <section
        className="section-lg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background effects */}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
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
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
              }}
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
                    color: "#22C55E",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#22C55E",
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
          @media (max-width: 900px) {
            .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF
         ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: "80px" }}>
        <div className="container text-center">
          <p className="body-sm" style={{ marginBottom: "2rem" }}>
            Trusted by forward-thinking teams
          </p>
          <div className="logo-grid">
            {logos.map((name) => (
              <span key={name} className="logo-item">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ═══════════════════════════════════════════════════
          PLATFORM IMPACT (PROOF LAYER)
         ═══════════════════════════════════════════════════ */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container text-center">
          <motion.div variants={fadeUp} custom={0}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Platform Impact
            </div>
          </motion.div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            custom={1}
            style={{ marginBottom: "3.5rem" }}
          >
            Real results from <span className="gradient-text">intelligent systems</span>
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

      {/* ═══════════════════════════════════════════════════
          CORE SYSTEMS
         ═══════════════════════════════════════════════════ */}
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
              The building blocks of <span className="gradient-text">autonomous operations</span>
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
                  variants={fadeUp}
                  custom={i + 3}
                  className="card"
                  style={{ textAlign: "left" }}
                >
                  <div
                    className="icon-box-lg"
                    style={{
                      background: `${sys.color}15`,
                      borderColor: `${sys.color}40`,
                      color: sys.color,
                      marginBottom: "1.25rem",
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${sys.color}40`,
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

      {/* ═══════════════════════════════════════════════════
          USE CASES
         ═══════════════════════════════════════════════════ */}
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
              <div className="section-label" style={{ display: "inline-flex" }}>Use Cases</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Intelligent automation for <span className="gradient-text">every function</span>
            </motion.h2>
          </div>

          <div className="grid-2">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.label}
                  variants={fadeUp}
                  custom={i + 2}
                  className="card"
                  style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                >
                  <div
                    className="icon-box"
                    style={{ flexShrink: 0 }}
                  >
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.5rem",
                      }}
                    >
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

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS
         ═══════════════════════════════════════════════════ */}
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
              <div className="section-label" style={{ display: "inline-flex" }}>How It Works</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              From audit to <span className="gradient-text">autonomous systems</span> in weeks
            </motion.h2>
            <motion.p className="body-lg" variants={fadeUp} custom={2} style={{ maxWidth: 560, margin: "1rem auto 0" }}>
              A proven 4-step process to deploy AI systems that scale your operations.
            </motion.p>
          </div>

          <div className="grid-4">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i + 3}
                style={{
                  position: "relative",
                  textAlign: "center",
                  padding: "2rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "3rem",
                    letterSpacing: "-0.04em",
                    color: "var(--accent-orange)",
                    opacity: 0.2,
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  className="card-title"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {step.title}
                </h3>
                <p className="body-md">{step.desc}</p>
                {i < howItWorks.length - 1 && (
                  <ChevronRight
                    size={20}
                    style={{
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--text-muted)",
                      opacity: 0.5,
                    }}
                    className="how-it-works-arrow"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .how-it-works-arrow { display: none; }
          }
        `}</style>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          LIVE SYSTEM PREVIEW
         ═══════════════════════════════════════════════════ */}
      <motion.section
        className="section"
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
          <motion.div variants={fadeUp} custom={3}>
            <LiveSystemPreview />
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          INTEGRATIONS
         ═══════════════════════════════════════════════════ */}
      <motion.section
        className="section-sm"
        style={{ background: "var(--bg-secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container text-center">
          <motion.div variants={fadeUp} custom={0}>
            <div className="section-label" style={{ display: "inline-flex" }}>Integrations</div>
          </motion.div>
          <motion.h2 className="section-title" variants={fadeUp} custom={1} style={{ marginBottom: "1rem" }}>
            Plug into <span className="gradient-text">your stack</span>
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
              <span key={name} className="badge badge-gray" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          CASE STUDY HIGHLIGHTS
         ═══════════════════════════════════════════════════ */}
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
              <div className="section-label" style={{ display: "inline-flex" }}>Results</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Measurable outcomes, <span className="gradient-text">every deployment</span>
            </motion.h2>
          </div>

          <div className="grid-3">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.client}
                variants={fadeUp}
                custom={i + 2}
                className="card"
              >
                <span className="badge badge-orange" style={{ marginBottom: "1rem", display: "inline-flex" }}>
                  {cs.client}
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: cs.color,
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {cs.metric}
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#fff",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {cs.result}
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  <p className="body-sm">
                    <strong style={{ color: "var(--text-secondary)" }}>Challenge:</strong> {cs.problem}
                  </p>
                  <p className="body-sm">
                    <strong style={{ color: "var(--text-secondary)" }}>System:</strong> {cs.system}
                  </p>
                </div>
                <Link
                  href="/case-studies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    marginTop: "1.25rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--accent-orange)",
                  }}
                >
                  Read full case study <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/case-studies" className="btn btn-secondary">
              View All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          BEFORE / AFTER
         ═══════════════════════════════════════════════════ */}
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
              <div className="section-label" style={{ display: "inline-flex" }}>Transformation</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Before INDU vs <span className="gradient-text">after INDU</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} custom={2} style={{ maxWidth: 900, margin: "0 auto" }}>
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

      {/* ═══════════════════════════════════════════════════
          TRUST LAYER
         ═══════════════════════════════════════════════════ */}
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
              <div className="section-label" style={{ display: "inline-flex" }}>Enterprise Ready</div>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Built for <span className="gradient-text">enterprise trust</span>
            </motion.h2>
          </div>

          <div className="grid-4">
            {trustSignals.map((ts, i) => {
              const Icon = ts.icon;
              return (
                <motion.div key={ts.title} variants={fadeUp} custom={i + 2} className="card" style={{ textAlign: "center" }}>
                  <div
                    className="icon-box"
                    style={{
                      margin: "0 auto 1rem",
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{ts.title}</h3>
                  <p className="body-md">{ts.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
         ═══════════════════════════════════════════════════ */}
      <section
        className="section-lg"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, var(--bg-primary), #080c14)",
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
