"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Shield, Database, Users, Server, Globe, FileKey, Activity } from "lucide-react";

export default function WhyInduPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.2 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Why INDU</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 900, margin: "0 auto 1.5rem" }}
          >
            The shift from software to <span className="gradient-text">autonomous systems</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Ten years ago, companies bought software to help employees work faster. Today, INDU deploys AI systems to do the work for them.
          </motion.p>
        </div>
      </section>

      {/* The Differentiation */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ display: "flex", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}
              className="why-row"
            >
              <div style={{ flex: 1, padding: "2rem", borderRight: "1px solid var(--border)" }} className="why-half">
                <span className="badge badge-gray" style={{ marginBottom: "1rem" }}>Traditional Operations</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Software requires operators</h3>
                <p className="body-md">You buy a CRM, then you have to hire people to click buttons, enter data, and maintain it.</p>
              </div>
              <div style={{ flex: 1, padding: "2rem", background: "linear-gradient(135deg, rgba(255,122,0,0.05), transparent)" }} className="why-half highlight">
                <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>With INDU</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--accent-orange)" }}>Systems run autonomously</h3>
                <p className="body-md" style={{ color: "var(--text-primary)" }}>Our AI agents connect directly to your CRM, make decisions, and execute tasks without human oversight.</p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ display: "flex", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}
              className="why-row"
            >
              <div style={{ flex: 1, padding: "2rem", borderRight: "1px solid var(--border)" }} className="why-half">
                <span className="badge badge-gray" style={{ marginBottom: "1rem" }}>Scaling Bottleneck</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Linear Cost Scaling</h3>
                <p className="body-md">To handle 2x the customers, you have to hire 2x the support reps, adding massive operational overhead.</p>
              </div>
              <div style={{ flex: 1, padding: "2rem", background: "linear-gradient(135deg, rgba(255,122,0,0.05), transparent)" }} className="why-half highlight">
                <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>With INDU</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--accent-orange)" }}>Zero Marginal Cost</h3>
                <p className="body-md" style={{ color: "var(--text-primary)" }}>An AI system that handles 100 tickets a day can handle 10,000 tickets tomorrow with zero additional headcount.</p>
              </div>
            </motion.div>

            {/* Row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ display: "flex", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}
              className="why-row"
            >
              <div style={{ flex: 1, padding: "2rem", borderRight: "1px solid var(--border)" }} className="why-half">
                <span className="badge badge-gray" style={{ marginBottom: "1rem" }}>Agency Model</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Paying for Time</h3>
                <p className="body-md">Consultants charge you by the hour to build generic bots or map processes that immediately go out of date.</p>
              </div>
              <div style={{ flex: 1, padding: "2rem", background: "linear-gradient(135deg, rgba(255,122,0,0.05), transparent)" }} className="why-half highlight">
                <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>With INDU</span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--accent-orange)" }}>Paying for Outcomes</h3>
                <p className="body-md" style={{ color: "var(--text-primary)" }}>We act as your AI infrastructure engineering team, deploying living systems evaluated entirely on ROI generated.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Get Started Flow */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">The Deployment Flow</h2>
            <p className="body-lg" style={{ marginTop: "1rem" }}>What happens when you partner with INDU.</p>
          </div>
          
          <div className="grid-4" style={{ position: "relative" }}>
            <div className="step-line-horizontal" />
            
            {[
              { step: "01", title: "Strategy Audit", desc: "We map your operational bottlenecks and calculate absolute AI ROI potential." },
              { step: "02", title: "System Architecture", desc: "Our engineers design the custom AI agent and workflow topology." },
              { step: "03", title: "Build & Integration", desc: "We deploy the system and integrate it via API into your existing software stack." },
              { step: "04", title: "Cutover & Scaling", desc: "System goes live. We monitor, optimize, and expand the autonomous capabilities." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} custom={i} style={{ position: "relative", zIndex: 1, background: "var(--bg-card)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                <div style={{ width: "32px", height: "32px", background: "var(--accent-orange)", borderRadius: "8px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginBottom: "1.5rem" }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p className="body-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>Stop hiring to <span className="gradient-text">scale</span>.</h2>
          <Link href="/pricing" className="btn btn-primary btn-lg">View Deployment Plans <ArrowRight size={16} /></Link>
        </div>
      </section>

      <style>{`
        .step-line-horizontal {
          position: absolute;
          top: 36px;
          left: 50px;
          right: 50px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-orange) 0%, rgba(255,122,0,0.1) 100%);
          z-index: 0;
        }
        @media (max-width: 900px) {
          .why-row { flex-direction: column; }
          .why-half { border-right: none !important; border-bottom: 1px solid var(--border); }
          .grid-4 { grid-template-columns: 1fr; gap: 1.5rem; }
          .step-line-horizontal { display: none; }
        }
      `}</style>
    </>
  );
}
