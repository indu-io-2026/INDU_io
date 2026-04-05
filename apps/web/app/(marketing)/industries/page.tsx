"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Cloud,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Megaphone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
  }),
};

const industries = [
  {
    id: "saas",
    icon: Cloud,
    badge: "B2B Software",
    title: "SaaS & Technology",
    headline: "Scale GTM and operations without linear headcount",
    challenges: [
      "High customer acquisition cost (CAC)",
      "Technical support bottlenecks",
      "Manual trial onboarding & qualification",
    ],
    solutions: [
      "AI Sales Agent: Real-time trial qualification and personalized follow-up sequences.",
      "Support Automation: Auto-resolve tier-1 technical queries and bug reporting.",
      "Billing Automation: Auto-handle failed payments, dunning, and upgrades.",
    ],
    caseStudy: {
      client: "Enterprise SaaS Tool",
      metric: "72%",
      result: "Increase in trial-to-paid conversion via automated AI qualification.",
    },
    color: "#3B82F6",
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    badge: "Retail",
    title: "E-Commerce & DTC",
    headline: "Automate support and personalize the buying journey",
    challenges: [
      "High volume of repetitive support tickets (WISMO)",
      "Cart abandonment & lost revenue",
      "Manual inventory and order exception handling",
    ],
    solutions: [
      "AI Support Agent: Auto-resolve WISMO (Where is my order), returns, and basic queries.",
      "Sales Automation: Personalized abandoned cart recovery via multimodal AI.",
      "Operations Engine: Automated supply chain alerting and order routing.",
    ],
    caseStudy: {
      client: "Global DTC Brand",
      metric: "68%",
      result: "Reduction in support ticket response time during peak Q4 season.",
    },
    color: "#FF7A00",
  },
  {
    id: "agencies",
    icon: Megaphone,
    badge: "Services",
    title: "Agencies & Consultancies",
    headline: "Protect margins by automating delivery and reporting",
    challenges: [
      "Non-billable hours spent on reporting and admin",
      "Inconsistent client onboarding",
      "Manual data aggregation across ad platforms",
    ],
    solutions: [
      "Workflow Engine: Auto-generate client reports from raw ad platform data.",
      "Internal Dashboards: AI-powered project health monitoring.",
      "Onboarding System: Zero-touch client onboarding and asset collection.",
    ],
    caseStudy: {
      client: "Performance Marketing Agency",
      metric: "40+",
      result: "Hours saved per week per account manager on manual reporting.",
    },
    color: "#8B5CF6",
  },
  {
    id: "finance",
    icon: Landmark,
    badge: "Financial",
    title: "Finance & FinTech",
    headline: "Accelerate compliance and underwriting decisions",
    challenges: [
      "Slow, manual KYC/AML processing",
      "Complex underwriting operations",
      "High cost of manual data extraction from documents",
    ],
    solutions: [
      "Processing AI: Automated OCR data extraction and verification.",
      "Workflow Engine: Streamlined underwriting approval chains.",
      "Operations: Intelligent exception flagging for human review.",
    ],
    caseStudy: {
      client: "Alternative Lending Startup",
      metric: "90%",
      result: "Decrease in initial loan application processing time.",
    },
    color: "#22C55E",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    badge: "Health",
    title: "Healthcare & Telehealth",
    headline: "Automate patient intake and administrative overhead",
    challenges: [
      "Patient scheduling bottlenecks",
      "Manual insurance verification processes",
      "High administrative burden on clinical staff",
    ],
    solutions: [
      "Booking AI: Autonomous patient scheduling and confirmation.",
      "Workflow Engine: Automated insurance pre-verification routing.",
      "Operations: Intelligent triage and routing for incoming inquiries.",
    ],
    caseStudy: {
      client: "National Telehealth Provider",
      metric: "3x",
      result: "Increase in patient intake capacity without additional admin staff.",
    },
    color: "#EC4899",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-blue" style={{ top: "-200px", right: "-100px", opacity: 0.35 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Industries</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 900, margin: "0 auto 1.5rem" }}
          >
            AI infrastructure tailored to <span className="gradient-text-blue">your vertical</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Generic tools don&apos;t work for complex businesses. We deploy AI systems designed specifically for the unique workflows and challenges of your industry.
          </motion.p>
        </div>
      </section>

      {/* Industries */}
      {industries.map((ind, idx) => {
        const Icon = ind.icon;
        const isEven = idx % 2 === 0;
        return (
          <motion.section
            key={ind.id}
            id={ind.id}
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
                  gridTemplateColumns: "1.2fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                  direction: isEven ? "ltr" : "rtl",
                }}
              >
                {/* Content */}
                <motion.div variants={fadeUp} custom={0} style={{ direction: "ltr" }}>
                  <div className="badge badge-blue" style={{ marginBottom: "1rem", display: "inline-flex", color: ind.color, borderColor: `${ind.color}40`, background: `${ind.color}15` }}>
                    <Icon size={12} /> {ind.badge}
                  </div>
                  <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
                    {ind.title}
                  </h2>
                  <p className="body-lg" style={{ marginBottom: "2.5rem", color: "var(--text-primary)" }}>
                    {ind.headline}
                  </p>

                  <div className="grid-2" style={{ gap: "2rem", marginBottom: "2.5rem" }}>
                    {/* Challenges */}
                    <div>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Key Challenges
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {ind.challenges.map((c) => (
                          <li key={c} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                            <span style={{ color: "var(--text-muted)", marginTop: "2px" }}>—</span>
                            <span className="body-sm">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: ind.color, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        INDU Solutions
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {ind.solutions.map((s) => (
                          <li key={s} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                            <span style={{ color: ind.color, marginTop: "2px" }}>✓</span>
                            <span className="body-sm" style={{ color: "var(--text-primary)" }}>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact" className="btn btn-primary">
                    Discuss Your Use Case <ArrowRight size={14} />
                  </Link>
                </motion.div>

                {/* Right panel (Case Study Snippet) */}
                <motion.div variants={fadeUp} custom={2} style={{ direction: "ltr" }}>
                  <div
                    className="card-glow"
                    style={{
                      background: "linear-gradient(135deg, var(--bg-card), rgba(255,255,255,0.02))",
                      border: `1px solid ${ind.color}30`,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0, right: 0,
                        width: "150px", height: "150px",
                        background: `radial-gradient(circle, ${ind.color}15 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      <TrendingUp size={16} color={ind.color} />
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: ind.color }}>
                        Impact Record
                      </span>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                      <div className="body-sm" style={{ marginBottom: "0.5rem" }}>Client: {ind.caseStudy.client}</div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "3.5rem",
                          fontWeight: 800,
                          letterSpacing: "-0.04em",
                          color: "var(--text-primary)",
                          lineHeight: 1,
                          marginBottom: "1rem",
                        }}
                      >
                        {ind.caseStudy.metric}
                      </div>
                      <p style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {ind.caseStudy.result}
                      </p>
                    </div>

                    <Link
                      href="/case-studies"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        transition: "color 0.2s ease",
                      }}
                    >
                      Read full case study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            <style>{`
              @media (max-width: 900px) {
                #${ind.id} .container > div {
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
              Don&apos;t see your industry?
            </h2>
            <p className="body-lg" style={{ maxWidth: 500, margin: "0 auto 2rem" }}>
              Our architecture is completely domain-agnostic. We can build and train custom models for any specialized application.
            </p>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Talk to an Engineer <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
