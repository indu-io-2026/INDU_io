"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
import { ROICalculator } from "@/components/ui/roi-calculator";

const plans = [
  {
    name: "Strategy Audit",
    price: "$2,500",
    period: "one-time",
    desc: "Complete operational audit and custom AI automation blueprint.",
    for: "Companies exploring where AI fits in their business.",
    features: [
      "Full workflow mapping & bottleneck analysis",
      "Custom automation blueprint & architecture",
      "Calculated ROI projections",
      "Tool & integration stack recommendations",
      "Executive presentation",
    ],
    cta: "Book Audit",
    primary: false,
  },
  {
    name: "Pilot System",
    price: "$15,000",
    period: "starting at",
    desc: "Design, build, and deploy one high-impact AI system.",
    for: "Teams wanting to prove ROI before scaling.",
    features: [
      "Everything in Strategy Audit",
      "One full workflow or agent built & deployed",
      "Seamless integration with 2 core tools",
      "1 month of monitoring & optimization",
      "Team training & documentation",
    ],
    cta: "Start Pilot",
    primary: true,
  },
  {
    name: "Enterprise Deployment",
    price: "Custom",
    period: "engagement",
    desc: "Full organization-wide AI transformation and custom training.",
    for: "Companies ready to operate as AI-first businesses.",
    features: [
      "Multi-agent system architecture",
      "Custom LLM fine-tuning & RAG on your data",
      "Unlimited integrations",
      "Dedicated engineering & support team",
      "VPC deployment & enterprise SLA",
    ],
    cta: "Contact Sales",
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden", paddingBottom: "40px" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Pricing & ROI</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}
          >
            Invest in systems, <span className="gradient-text">stop paying for hours</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Our pricing is based on the complexity of the deployment and the immediate ROI generated for your business.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className={plan.primary ? "card-glow" : "card"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderWidth: plan.primary ? "2px" : "1px",
                  borderColor: plan.primary ? "var(--accent-orange)" : "var(--border)",
                  transform: plan.primary ? "translateY(-8px)" : "none",
                }}
              >
                {plan.primary && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "var(--accent-orange)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 1rem",
                      borderRadius: "100px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Most Recommended
                  </div>
                )}
                
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {plan.name}
                </h3>
                <p className="body-sm" style={{ marginBottom: "1.5rem", minHeight: "40px" }}>
                  {plan.desc}
                </p>

                <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text-primary)" }}>
                    {plan.price}
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                    {plan.period}
                  </span>
                </div>

                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "8px", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.25rem" }}>Best For:</span>
                  <span className="body-sm" style={{ color: "var(--text-primary)" }}>{plan.for}</span>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", flex: 1, marginBottom: "2.5rem" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle size={16} color={plan.primary ? "var(--accent-orange)" : "var(--text-secondary)"} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span className="body-sm" style={{ color: "var(--text-primary)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn ${plan.primary ? "btn-primary" : "btn-secondary"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label" style={{ display: "inline-flex" }}>Investment Math</div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
                AI isn&apos;t an expense, it&apos;s a <span className="gradient-text">capital asset</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: "2rem" }}>
                When you deploy an INDU system, you aren&apos;t buying software — you are acquiring an autonomous workforce that operates 24/7, doesn&apos;t take sick days, and scales infinitely.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Average client ROI achieved within 3 months",
                  "Replaces variable labor costs with fixed infrastructure",
                  "Zero continuous training required after deployment",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,122,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-orange)", flexShrink: 0 }}>
                      <CheckCircle size={12} />
                    </div>
                    <span className="body-md" style={{ color: "var(--text-primary)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ROICalculator />
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .container > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Do you charge monthly maintenance fees?",
                a: "For Pilot and Enterprise deployments, we include 1 month of optimization. After that, we offer an optional Ongoing Optimization retainer for continuous model improvements, new feature additions, and scaling. Basic system hosting is charged at cost.",
              },
              {
                q: "How long does a Pilot deployment take?",
                a: "A standard pilot (e.g., an AI support agent or a specific workflow automation) takes 3 to 5 weeks from kickoff to deployment. Complex enterprise integrations may take longer.",
              },
              {
                q: "Do I need technical knowledge to manage the system?",
                a: "No. We build user-friendly dashboards for monitoring and managing the AI. Our goal is to hand off a fully functioning 'black box' that just works, with a clean UI for your team to oversee it.",
              },
              {
                q: "Who owns the IP and the data?",
                a: "You do. We deploy the systems into your infrastructure (or dedicated cloud environments). Your data is never used to train generalized models. You own the prompts, the workflows, and the resulting data.",
              },
            ].map((faq, i) => (
              <div key={i} className="card" style={{ padding: "1.5rem" }}>
                <h4 style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "1.0625rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  <HelpCircle size={18} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  {faq.q}
                </h4>
                <p className="body-sm" style={{ paddingLeft: "1.875rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
