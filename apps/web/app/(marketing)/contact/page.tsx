"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companySize: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", companySize: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
                {status === "success" ? (
                  <div style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,122,0,0.1)", color: "var(--accent-orange)", marginBottom: "1rem" }}>
                      ✓
                    </div>
                    <h4 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.5rem" }}>Request Sent Successfully</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>We&apos;ve received your details and will be in touch shortly to schedule your audit.</p>
                    <button onClick={() => setStatus("idle")} className="btn" style={{ marginTop: "1.5rem", background: "transparent", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                  >
                    {status === "error" && (
                      <div style={{ padding: "1rem", borderRadius: "8px", background: "rgba(255, 0, 0, 0.1)", border: "1px solid rgba(255, 0, 0, 0.2)", color: "#ff8080", fontSize: "0.875rem" }}>
                        Failed to send message. Please try again later or email us directly at contact@indu.life.
                      </div>
                    )}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>First Name</label>
                        <input required type="text" className="contact-input" placeholder="John" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Last Name</label>
                        <input required type="text" className="contact-input" placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Work Email</label>
                      <input required type="email" className="contact-input" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Company Size</label>
                      <select className="contact-input" required value={formData.companySize} onChange={(e) => setFormData({...formData, companySize: e.target.value})}>
                        <option value="">Select size...</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201+">201+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>What process are you trying to automate?</label>
                      <textarea required className="contact-input" rows={4} placeholder="E.g., Our support team spends 30 hours a week answering the same 5 questions..." style={{ resize: "vertical" }} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                    </div>

                    <button type="submit" disabled={status === "loading"} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem", padding: "1rem", opacity: status === "loading" ? 0.7 : 1 }}>
                      {status === "loading" ? "Sending..." : (
                         <>Request Strategy Audit <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                )}
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
