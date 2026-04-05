"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="section-lg" style={{ position: "relative" }}>
        <div className="glow-blob glow-blob-orange" style={{ top: "-100px", right: "-100px", opacity: 0.2 }} />
        <div className="container">
          <div className="grid-2">
            
            {/* Left Col - Context */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="section-label" style={{ display: "inline-flex" }}>Connect</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
                Book a Strategy <span className="gradient-text">Audit</span>
              </h1>
              <p className="body-lg" style={{ marginBottom: "3rem", maxWidth: "500px" }}>
                We don&apos;t do high-pressure sales calls. We analyze your workflows, find the bottlenecks, and show you exactly what autonomous systems can achieve.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    <Mail size={18} color="var(--accent-orange)" /> Email
                  </div>
                  <a href="mailto:deploy@indu.io" className="body-md" style={{ color: "var(--text-secondary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}>deploy@indu.io</a>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--text-primary)", fontWeight: 600 }}>
                    <MapPin size={18} color="var(--accent-orange)" /> Global Operations
                  </div>
                  <p className="body-md" style={{ color: "var(--text-secondary)" }}>Remote-first. Deploying systems worldwide.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Col - Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="card-glow" style={{ background: "var(--bg-card)", padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "2rem" }}>Request an Audit</h3>
                <form 
                  onSubmit={(e) => { e.preventDefault(); alert("Form submission simulated. Backend connection pending."); }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>First Name</label>
                      <input required type="text" className="contact-input" placeholder="John" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Last Name</label>
                      <input required type="text" className="contact-input" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Work Email</label>
                    <input required type="email" className="contact-input" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Company Size</label>
                    <select className="contact-input" required>
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>What process are you trying to automate?</label>
                    <textarea required className="contact-input" rows={4} placeholder="E.g., Our support team spends 30 hours a week answering the same 5 questions..." style={{ resize: "vertical" }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem", padding: "1rem" }}>
                    Request Strategy Audit <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <style>{`
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.875rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .contact-input:focus {
          border-color: var(--accent-orange-border);
          background: rgba(255,122,0,0.02);
          box-shadow: 0 0 0 3px rgba(255,122,0,0.1);
        }
        .contact-input::placeholder { color: var(--text-muted); }
        option { background: var(--bg-card); color: var(--text-primary); }
      `}</style>
    </>
  );
}
