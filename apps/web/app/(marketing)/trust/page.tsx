"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, FileKey, Database, UserCheck, Eye, Activity } from "lucide-react";

export default function TrustPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-blue" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.2 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>Trust & Security</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 900, margin: "0 auto 1.5rem" }}
          >
            Bank-grade encryption. <span className="gradient-text-blue">Absolute data sovereignty.</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            Enterprise AI requires absolute security. We build systems that protect your data, comply with regulations, and guarantee uptime.
          </motion.p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            {[
              { icon: Database, title: "Data Isolation", desc: "Single-tenant deployments available. Your data is physically or logically isolated and never cross-pollinates with other organizations." },
              { icon: FileKey, title: "Zero Model Training", desc: "Your data is strictly used for inference (RAG). It is never sent to public endpoints for training foundational models." },
              { icon: Lock, title: "E2E Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit across all endpoints and data stores." },
              { icon: UserCheck, title: "Granular RBAC", desc: "Fine-grained role-based access control. Define exactly who (and which AI agent) can access what data." },
              { icon: Server, title: "VPC Deployment", desc: "For full control, we can deploy the entire INDU infrastructure directly into your AWS/GCP virtual private cloud." },
              { icon: Activity, title: "Audit Logging", desc: "Immutable audit trails of every database read/write and AI agent action for compliance reporting." },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} custom={i}>
                  <Icon size={24} color="var(--accent-blue)" style={{ marginBottom: "1rem" }} />
                  <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{feature.title}</h3>
                  <p className="body-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "3rem", display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Compliance Standards</h2>
              <p className="body-md">Our infrastructure is built to meet and exceed global regulatory requirements for data protection and privacy.</p>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["SOC 2 Type II", "GDPR", "HIPAA Ready", "ISO 27001"].map(cert => (
                <div key={cert} style={{ padding: "1rem 1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", fontWeight: 600, color: "var(--text-primary)" }}>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
