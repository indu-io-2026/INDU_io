"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Server,
  Network,
  Cpu,
  Lock,
  Database,
  Layers,
  CheckCircle,
  Zap
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
  }),
};

export default function ArchitecturePage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-blob glow-blob-blue" style={{ top: "-200px", right: "-100px", opacity: 0.3 }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>System Architecture</div>
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}
          >
            Built for <span className="gradient-text-blue">enterprise scale</span>
          </motion.h1>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            INDU systems are API-first, distributed, and highly secure. We build resilient infrastructure that handles millions of autonomous actions per day.
          </motion.p>
        </div>
      </section>

      {/* System Diagram */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
            
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Layer 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", width: "120px", flexShrink: 0 }}>01. CLIENT_INPUT</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  <div className="arch-node"><Globe size={14} color="var(--accent-blue)" /> Web Hooks</div>
                  <div className="arch-node"><MessageSquare size={14} color="var(--accent-blue)" /> Chat Interfaces</div>
                  <div className="arch-node"><Database size={14} color="var(--accent-blue)" /> DB Triggers</div>
                  <div className="arch-node"><Mail size={14} color="var(--accent-blue)" /> Email Parsers</div>
                </div>
              </div>

              {/* Connector */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "2px", height: "40px", background: "linear-gradient(180deg, var(--accent-blue) 0%, var(--accent-orange) 100%)", opacity: 0.5 }} />
              </div>

              {/* Layer 2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", width: "120px", flexShrink: 0 }}>02. CORE_LOGIC</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  <div className="arch-node orange" style={{ borderColor: "var(--accent-orange-border)", background: "rgba(255,122,0,0.05)" }}>
                    <Cpu size={14} color="var(--accent-orange)" /> LLM Orchestrator
                  </div>
                  <div className="arch-node orange" style={{ borderColor: "var(--accent-orange-border)", background: "rgba(255,122,0,0.05)" }}>
                    <Layers size={14} color="var(--accent-orange)" /> Context Engine (RAG)
                  </div>
                  <div className="arch-node orange" style={{ borderColor: "var(--accent-orange-border)", background: "rgba(255,122,0,0.05)" }}>
                    <Network size={14} color="var(--accent-orange)" /> Workflow Router
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "2px", height: "40px", background: "var(--accent-orange)", opacity: 0.5 }} />
              </div>

              {/* Layer 3 */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", width: "120px", flexShrink: 0 }}>03. EXECUTION</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  <div className="arch-node"><Plug size={14} color="#22C55E" /> 3rd-Party APIs</div>
                  <div className="arch-node"><Server size={14} color="#22C55E" /> Internal Microservices</div>
                  <div className="arch-node"><Database size={14} color="#22C55E" /> Data Warehouses</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech principles */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Technical Principles</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: Cpu, title: "Model Agnostic", desc: "We don't lock you into one LLM. We route tasks to the best model (GPT-4, Claude, Gemini, or open-source) based on complexity and cost." },
              { icon: Layers, title: "RAG & Vector Search", desc: "Agents have access to your enterprise knowledge via high-performance vector databases for infinite context windows." },
              { icon: Network, title: "Event-Driven", desc: "Systems run asynchronously via event queues (Kafka, SQS) to guarantee delivery and handle massive traffic spikes without degradation." },
              { icon: Lock, title: "Isolated Data", desc: "Single-tenant deployments available. Your data never cross-pollinates with other clients or trains foundational models." },
              { icon: Zap, title: "Edge Deployment", desc: "Global edge caching and compute for sub-50ms latency on critical synchronous user interfaces." },
              { icon: CheckCircle, title: "Human-in-the-Loop", desc: "Configurable confidence thresholds automatically escalate ambiguous or high-risk decisions back to human operators." },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} className="card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                  <Icon size={20} color="var(--accent-blue)" style={{ marginBottom: "1rem" }} />
                  <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{feature.title}</h3>
                  <p className="body-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// Temporary internal lucide imports for the diagram
function Globe(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
function MessageSquare(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> }
function Mail(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function Plug(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg> }
