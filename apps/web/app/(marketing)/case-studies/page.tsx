import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Activity, Clock } from "lucide-react";
import { caseStudies } from "../../../data/case-studies";

export const metadata = {
  title: "Case Studies | INDU Enterprise Deployments",
  description: "Real-world AI system deployments and infrastructure upgrades.",
};

export default function CaseStudiesPage() {
  return (
    <div className="section-lg">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "48rem", marginBottom: "4rem" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
            <Activity size={16} />
            Real-World Execution
          </div>
          <h1 className="hero-title" style={{ marginBottom: "1.5rem" }}>
            Systems Deployed. <br />
            <span className="gradient-text">
              Outcomes Delivered.
            </span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "640px" }}>
            We don't build generic SaaS tools. We engineer deeply integrated autonomous systems. Explore how our intelligence orchestration layer operates in production across major industries.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="card"
              style={{ display: "flex", flexDirection: "column", padding: 0 }}
            >
              {/* Preview Image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(0,0,0,0.5)", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
                <Image
                  src={study.images[0] || ''}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                  className="case-study-img"
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6rem", background: "linear-gradient(to top, var(--bg-card), transparent)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.75rem", borderRadius: "100px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: "1px solid var(--border)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 500, color: "rgba(255,255,255,0.9)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{study.category}</span>
                </div>
              </div>

              {/* Content Box */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 className="card-title" style={{ marginBottom: "0.5rem" }}>{study.title}</h3>
                <p className="body-sm" style={{ marginBottom: "1.5rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {study.problem}
                </p>

                {/* Main Metric Spotlight */}
                <div style={{ marginTop: "auto", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div className="icon-box" style={{ width: "40px", height: "40px" }}>
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>{study.results[0]?.value || ''}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>{study.results[0]?.label || ''}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--accent-blue)", fontWeight: 500, fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>
                  <span>View Full System</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
