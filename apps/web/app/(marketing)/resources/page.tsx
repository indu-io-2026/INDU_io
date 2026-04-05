"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, FileText, Download, ArrowRight, ArrowUpRight } from "lucide-react";

const resources = [
  { type: "Playbook", title: "The Enterprise AI Strategy Playbook", desc: "A 40-page guide on identifying high-ROI automation targets and building internal AI champions.", tag: "Executive", color: "#FF7A00" },
  { type: "Template", title: "ROI Calculation Matrix", desc: "Download the Excel model we use internally to project cost savings before deploying AI systems.", tag: "Finance", color: "#3B82F6" },
  { type: "Guide", title: "Migrating from SaaS to Autonomous Systems", desc: "Technical migration path for replacing legacy software silos with intelligent workflow engines.", tag: "Technical", color: "#8B5CF6" },
  { type: "Case Studies", title: "Automation Output Report Q3 2025", desc: "Aggregated performance data across 120+ INDU deployments.", tag: "Research", color: "#22C55E" },
  { type: "Playbook", title: "Building AI-Native Support Teams", desc: "How to restructure your CX team when an AI agent handles 60% of the ticket volume.", tag: "Support", color: "#EC4899" },
  { type: "Template", title: "Vendor Assessment Scorecard", desc: "How to evaluate AI infrastructure partners on security, scalability, and integration depth.", tag: "Procurement", color: "#FFB020" }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.2 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Intelligence</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}
          >
            Insights on the <span className="gradient-text">autonomous enterprise</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Playbooks, models, and research on deploying AI infrastructure, calculating ROI, and managing the shift from software to systems.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {resources.map((res, i) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: res.color, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {res.type}
                  </span>
                  <span className="badge badge-gray">{res.tag}</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", lineHeight: 1.4 }}>{res.title}</h3>
                <p className="body-sm" style={{ flex: 1, marginBottom: "1.5rem" }}>{res.desc}</p>
                <Link
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Access Resource <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
