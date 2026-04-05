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
        <div className="container" style={{ position: "relative", maxWidth: "800px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col">
              {[
                {
                  id: 1,
                  icon: Network,
                  label: "01. Intake & Ingestion Layer",
                  description: "Multi-channel data ingestion capturing user messages, system events, and raw NLP data.",
                  detail: "Tools: Webhook Receivers · Natural Language Interpreters",
                  color: "#3B82F6",
                  dimColor: "rgba(59,130,246,0.1)",
                },
                {
                  id: 2,
                  icon: Layers,
                  label: "02. Cognitive Intelligence Layer",
                  description: "LLM Orchestration, semantic chunking, and Retrieval-Augmented Generation.",
                  detail: "Tools: Context Engine (RAG) · Strategic Router",
                  color: "#FF7A00",
                  dimColor: "rgba(255,122,0,0.1)",
                },
                {
                  id: 3,
                  icon: Server,
                  label: "03. Execution & Impact Layer",
                  description: "Executing deterministic workflows, calling APIs, and persisting state changes.",
                  detail: "Tools: Automated API Dispatches · Core Microservices",
                  color: "#22C55E",
                  dimColor: "rgba(34,197,94,0.1)",
                }
              ].map((step, i, arr) => {
                const Icon = step.icon;
                return (
                  <div key={step.id}>
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "flex-start",
                        padding: "1.5rem",
                        borderRadius: "16px",
                        background: step.dimColor,
                        border: `1px solid ${step.color}4D`,
                        transition: "all 0.4s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          background: step.dimColor,
                          border: `1px solid ${step.color}66`,
                        }}
                      >
                        <Icon size={24} color={step.color} />
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 700,
                              fontSize: "1.25rem",
                              color: step.color,
                            }}
                          >
                            {step.label}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              color: step.color,
                              padding: "0.25rem 0.75rem",
                              background: step.dimColor,
                              borderRadius: "100px",
                              border: `1px solid ${step.color}33`,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Active
                          </span>
                        </div>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                          {step.description}
                        </p>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.875rem",
                            color: step.color,
                            background: step.dimColor,
                            border: `1px solid ${step.color}33`,
                            borderRadius: "8px",
                            padding: "0.75rem 1rem",
                          }}
                        >
                          → {step.detail}
                        </div>
                      </div>
                    </div>

                    {/* Connector line */}
                    {i < arr.length - 1 && (
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: "3.25rem", height: "40px" }}>
                        <div
                          style={{
                            position: "relative",
                            width: "2px",
                            height: "100%",
                            background: `linear-gradient(180deg, ${step.color}, ${arr[i+1]?.color})`,
                            borderRadius: "1px",
                            opacity: 0.6,
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
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

      {/* Architecture in Production Case Study */}
      <section className="section py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="section-label mb-6" style={{ display: "inline-flex" }}>Architecture in Production</div>
              <h2 className="section-title text-start mb-8">
                AgriHealth: <span className="gradient-text-blue">Global Logistics</span> at Scale
              </h2>
              <p className="body-lg mb-8 text-white/70">
                INDU architecture transformed AgriHealth's manual 4-day audit process into a sub-second autonomous clearance engine, handling 12+ regional data streams simultaneously.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Database size={22} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Ingestion Layer</h4>
                    <p className="text-sm text-white/50">Unified IoT sensors and 12 legacy regional databases into a 14ms real-time stream.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Cpu size={22} className="text-[#FF7A00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Intelligence Layer</h4>
                    <p className="text-sm text-white/50">LLM-based compliance verification replaced 4-day manual clearance cycles with 842ms LLM audits.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Zap size={22} className="text-[#22C55E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Execution Layer</h4>
                    <p className="text-sm text-white/50">Core microservices issue 40,000+ logistics clearance tokens per month directly to shipping APIs.</p>
                  </div>
                </div>
              </div>

              <Link href="/case-studies/agrihealth" className="btn btn-primary">
                View AgriHealth Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#3B82F6] opacity-10 blur-[120px] -z-10" />
              <div className="card-glow p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8 font-heading">Infrastructure Impact</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-3">
                      <span className="text-white/40 uppercase tracking-widest">Processing Latency</span>
                      <span className="text-[#3B82F6] font-bold">-92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-3">
                      <span className="text-white/40 uppercase tracking-widest">Manual Error Rate</span>
                      <span className="text-[#FF7A00] font-bold">0%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#FF7A00] shadow-[0_0_15px_rgba(255,122,0,0.5)]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-3">
                      <span className="text-white/40 uppercase tracking-widest">System Throughput</span>
                      <span className="text-[#22C55E] font-bold">4.2M actions/mo</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-6 font-heading">
                   <div>
                     <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1 font-mono">Architecture</div>
                     <div className="text-sm font-bold text-white uppercase">VPC · Edge</div>
                   </div>
                   <div>
                     <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1 font-mono">Status</div>
                     <div className="text-sm font-bold text-[#22C55E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                       Production Live
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Globe(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
function MessageSquare(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> }
function Plug(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg> }
