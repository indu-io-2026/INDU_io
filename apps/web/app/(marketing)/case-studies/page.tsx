"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const caseStudies = [
  {
    id: "global-logistics",
    client: "Global Logistics Provider",
    industry: "Logistics & Supply Chain",
    problem: "A team of 45 agents processing thousands of complex freight quotes manually, leading to an average response time of 14 hours and lost deals.",
    system: "Multi-Agent Quoting System",
    stack: "GPT-4, Custom RAG array on ERP, Postgres, internal APIs",
    metrics: [
      { value: 92, suffix: "%", label: "reduction in quote time" },
      { value: 14, suffix: "M", prefix: "$", label: "added to pipeline" },
      { value: 0, suffix: "", label: "added headcount" }
    ],
    details: "INDU deployed a specialized AI agent connected directly to their legacy ERP and vector databases containing current freight rates. The agent now auto-generates 85% of quotes instantly, routing complex edge cases to human operators.",
    color: "#FF7A00"
  },
  {
    id: "fintech-compliance",
    client: "Alternative Lending Startup",
    industry: "FinTech",
    problem: "KYC and initial underwriting required manual review of 10+ documents per applicant, taking 3 days and severely bottlenecking customer acquisition.",
    system: "Autonomous Underwriting Pipeline",
    stack: "Claude 3.5 Sonnet, AWS Textract, Webhooks, custom rules engine",
    metrics: [
      { value: 4, suffix: "hrs", label: "avg processing time" },
      { value: 99.8, suffix: "%", label: "accuracy rate" },
      { value: 3, suffix: "x", label: "application volume handled" }
    ],
    details: "We built a workflow engine that intercepts application documents, runs OCR via Textract, and uses an LLM to assess data against their underwriting matrix. Safe applications are auto-approved; exceptions are flagged with detailed AI summaries.",
    color: "#22C55E"
  },
  {
    id: "dtc-apparel",
    client: "Enterprise DTC Apparel",
    industry: "E-Commerce",
    problem: "Overwhelmed by WISMO (Where is my order) requests and basic returns during Q4, causing a huge backlog and tanking CSAT.",
    system: "Omnichannel Support Agent",
    stack: "Zendesk API, Shopify API, OpenAI processing",
    metrics: [
      { value: 68, suffix: "%", label: "tickets auto-resolved" },
      { value: 88, suffix: "%", label: "CSAT score maintained" },
      { value: 450, suffix: "k", prefix: "$", label: "saved in seasonal hiring" }
    ],
    details: "The deployed agent queries Shopify in real-time, handling order tracking, policy questions, and returns natively within Zendesk widget. It recognizes frustrated sentiment and seamlessly hands off to humans with full summary.",
    color: "#3B82F6"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Case Studies</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}
          >
            Measured in <span className="gradient-text">ROI</span>.
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Look at the actual impact of deploying INDU autonomous operations across various enterprise sectors. No vanity metrics.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card"
                style={{ padding: 0, overflow: "hidden", border: `1px solid ${cs.color}40` }}
              >
                {/* Header Area */}
                <div style={{ padding: "2.5rem", borderBottom: "1px solid var(--border)", background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                      <span className="badge badge-gray" style={{ marginBottom: "1rem" }}>{cs.industry}</span>
                      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{cs.client}</h2>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>
                        <span style={{ color: cs.color }}>System deployed:</span> {cs.system}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Area */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="cs-body">
                  <div style={{ padding: "2.5rem", borderRight: "1px solid var(--border)" }} className="cs-half">
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>The Problem</h4>
                    <p className="body-md" style={{ marginBottom: "2rem" }}>{cs.problem}</p>
                    
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>The INDU Build</h4>
                    <p className="body-md">{cs.details}</p>
                    
                    <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                      <span className="body-sm" style={{ display: "block", marginBottom: "0.25rem", color: "var(--text-muted)" }}>Tech Stack:</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: cs.color }}>{cs.stack}</span>
                    </div>
                  </div>

                  {/* Metrics Area */}
                  <div style={{ padding: "2.5rem", background: "rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", justifyContent: "center" }} className="cs-half">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                      <TrendingUp color={cs.color} size={20} />
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: cs.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>Hard Outcomes</span>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                      {cs.metrics.map(m => (
                        <div key={m.label}>
                          <div style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1 }}>
                            {m.prefix}<AnimatedCounter end={m.value} suffix={m.suffix} />
                          </div>
                          <div style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ textAlign: "center", background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>Ready for your own case study?</h2>
          <p className="body-lg" style={{ maxWidth: 600, margin: "0 auto 2rem" }}>Contact us for a strategy audit. If we can&apos;t identify measurable ROI for your business, we won&apos;t take the project.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Book an Audit <ArrowRight size={16} /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cs-body { grid-template-columns: 1fr !important; }
          .cs-half { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </>
  );
}
