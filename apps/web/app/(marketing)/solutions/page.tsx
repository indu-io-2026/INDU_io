"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Bot,
  Headphones,
  Workflow,
  Brain,
  Settings,
  CheckCircle,
  BarChart3,
  Zap,
  Clock,
  Users,
  Target,
  Mail,
  Shield,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
  }),
};

const solutions = [
  {
    id: "sales-automation",
    icon: Target,
    badge: "Sales",
    title: "AI Sales Automation",
    headline: "Close 40% more deals with zero manual follow-up",
    problem: "Sales teams spend 60% of their time on non-selling activities — data entry, lead routing, follow-up emails, and qualification. Revenue suffers from slow response times.",
    solution: "INDU deploys autonomous AI sales agents that qualify leads in real-time, auto-route to the right rep, trigger personalized outreach sequences, and keep your CRM perfectly updated — all without human intervention.",
    features: [
      "Real-time lead scoring & qualification",
      "Automated CRM enrichment & updates",
      "AI-generated personalized email sequences",
      "Intelligent lead routing & assignment",
      "Pipeline analytics & forecasting",
    ],
    results: [
      { metric: "40%", label: "Higher close rate" },
      { metric: "< 30s", label: "Lead response time" },
      { metric: "72%", label: "Less manual data entry" },
    ],
    color: "#FF7A00",
  },
  {
    id: "support-automation",
    icon: Headphones,
    badge: "Support",
    title: "Customer Support Automation",
    headline: "Resolve 60% of support tickets without human intervention",
    problem: "Support teams are drowning in tickets. Response times are slow, customer satisfaction drops, and hiring more agents doesn't scale. Context gets lost between channels.",
    solution: "Deploy AI support agents that understand customer intent, resolve common issues instantly, escalate complex cases intelligently, and maintain full conversation context across every channel.",
    features: [
      "Multi-channel AI support (chat, email, voice)",
      "Intent classification & smart routing",
      "Knowledge base auto-learning",
      "Sentiment analysis & escalation triggers",
      "Agent assist for complex cases",
    ],
    results: [
      { metric: "60%", label: "Auto-resolved tickets" },
      { metric: "85%", label: "CSAT score" },
      { metric: "3x", label: "Faster resolution" },
    ],
    color: "#3B82F6",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    badge: "Operations",
    title: "Workflow Automation",
    headline: "Eliminate manual processes across your entire organization",
    problem: "Critical business processes still run on email threads, spreadsheets, and manual handoffs. Errors pile up, bottlenecks form, and teams waste hours on repetitive tasks.",
    solution: "INDU maps your entire operational workflow and replaces manual steps with intelligent automation — approval chains, data transformations, notifications, and cross-system synchronization all run autonomously.",
    features: [
      "Visual workflow builder",
      "Conditional logic & branching",
      "Cross-system data sync",
      "Automated approvals & escalations",
      "Real-time monitoring & alerts",
    ],
    results: [
      { metric: "80%", label: "Manual work eliminated" },
      { metric: "40+", label: "Hours saved per week" },
      { metric: "99.9%", label: "Process accuracy" },
    ],
    color: "#8B5CF6",
  },
  {
    id: "ai-agents",
    icon: Bot,
    badge: "AI Agents",
    title: "Autonomous AI Agents",
    headline: "Deploy intelligent agents that think, decide, and act",
    problem: "One-size-fits-all chatbots can't handle complex business logic. You need AI that understands your domain, makes decisions, and takes actions across your systems.",
    solution: "INDU builds custom AI agents tailored to your domain — agents that understand context, reason through complex scenarios, take multi-step actions, and continuously improve from feedback.",
    features: [
      "Custom-trained domain models",
      "Multi-step reasoning & decision making",
      "Tool use & API integration",
      "Memory & conversation context",
      "Human-in-the-loop escalation",
    ],
    results: [
      { metric: "10x", label: "Faster task execution" },
      { metric: "95%", label: "Decision accuracy" },
      { metric: "24/7", label: "Always-on operation" },
    ],
    color: "#FF7A00",
  },
  {
    id: "custom-systems",
    icon: Settings,
    badge: "Custom",
    title: "Custom AI Systems",
    headline: "Enterprise-grade AI systems built for your exact needs",
    problem: "Off-the-shelf tools don't fit your unique workflows, compliance requirements, or industry regulations. You need a system designed from the ground up for your business.",
    solution: "We architect and deploy bespoke AI systems — from internal tools and dashboards to full SaaS platforms — designed around your specific workflows, data, and scale requirements.",
    features: [
      "Custom architecture & design",
      "Industry-specific AI models",
      "Full data sovereignty & compliance",
      "Scalable cloud infrastructure",
      "Dedicated engineering support",
    ],
    results: [
      { metric: "100%", label: "Custom to your needs" },
      { metric: "Enterprise", label: "Grade infrastructure" },
      { metric: "∞", label: "Scalability" },
    ],
    color: "#22C55E",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-200px", right: "-100px", opacity: 0.4 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Solutions</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}
          >
            AI systems that deliver{" "}
            <span className="gradient-text">measurable outcomes</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 560, margin: "0 auto" }}
          >
            Every solution is outcome-driven. We don&apos;t build features — we deploy systems that solve real business problems.
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((sol, idx) => {
        const Icon = sol.icon;
        const isEven = idx % 2 === 0;
        return (
          <motion.section
            key={sol.id}
            id={sol.id}
            className="section"
            style={{ background: isEven ? "var(--bg-secondary)" : "var(--bg-primary)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="container">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                  direction: isEven ? "ltr" : "rtl",
                }}
              >
                {/* Content */}
                <motion.div variants={fadeUp} custom={0} style={{ direction: "ltr" }}>
                  <div className="badge badge-orange" style={{ marginBottom: "1rem", display: "inline-flex" }}>
                    <Icon size={12} /> {sol.badge}
                  </div>
                  <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    {sol.headline}
                  </h2>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      The Problem
                    </h4>
                    <p className="body-md">{sol.problem}</p>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--accent-orange)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      The INDU System
                    </h4>
                    <p className="body-md">{sol.solution}</p>
                  </div>

                  <Link href="/contact" className="btn btn-primary">
                    Get This System <ArrowRight size={14} />
                  </Link>
                </motion.div>

                {/* Right panel */}
                <motion.div variants={fadeUp} custom={2} style={{ direction: "ltr" }}>
                  {/* Features */}
                  <div className="card" style={{ marginBottom: "1.5rem" }}>
                    <h4 className="card-title" style={{ marginBottom: "1rem" }}>
                      System Capabilities
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {sol.features.map((f) => (
                        <div
                          key={f}
                          style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}
                        >
                          <CheckCircle size={16} color={sol.color} style={{ flexShrink: 0 }} />
                          <span className="body-md" style={{ color: "var(--text-primary)" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "1px",
                      background: "var(--border)",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {sol.results.map((r) => (
                      <div
                        key={r.label}
                        style={{
                          background: "var(--bg-card)",
                          padding: "1.25rem 1rem",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: sol.color,
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {r.metric}
                        </div>
                        <div className="body-sm">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <style>{`
              @media (max-width: 900px) {
                #${sol.id} .container > div {
                  grid-template-columns: 1fr !important;
                  direction: ltr !important;
                }
              }
            `}</style>
          </motion.section>
        );
      })}

      {/* Bottom CTA */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--bg-primary), #080c14)" }}>
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
              Not sure which solution fits? <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: 500, margin: "0 auto 2rem" }}>
              Book a free strategy call. We&apos;ll analyze your workflows and recommend exactly what to automate first.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Strategy Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
