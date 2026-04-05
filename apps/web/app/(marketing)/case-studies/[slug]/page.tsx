import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, Target, ArrowRight } from "lucide-react";
import { caseStudies } from "../../../../data/case-studies";
import { MediaGallery } from "../../../../components/ui/media-gallery";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      {/* Detail Page Hero */}
      <div style={{ borderBottom: "1px solid var(--border)", backgroundColor: "#080c14", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="container">
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2rem", textDecoration: "none" }}
             className="text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Deployments
          </Link>
          
          <div style={{ maxWidth: "56rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.75rem", borderRadius: "100px", backgroundColor: "rgba(255, 122, 0, 0.1)", border: "1px solid rgba(255, 122, 0, 0.2)", marginBottom: "1.5rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF7A00" }} className="animate-pulse" />
              <span style={{ fontSize: "0.875rem", fontFamily: "var(--font-mono)", fontWeight: 500, color: "#FF7A00", textTransform: "uppercase", letterSpacing: "0.05em" }}>{study.category} System</span>
            </div>
            
            <h1 className="hero-title" style={{ marginBottom: "2rem" }}>
              {study.title}
            </h1>
            
            {/* Top Metrics Grid */}
            <div className="grid-3" style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              {study.results.map((result, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <div style={{ fontSize: "1.875rem", fontWeight: 700, fontFamily: "var(--font-heading)", color: "white" }}>{result.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(auto, 400px)", gap: "4rem" }}>
          
          {/* Main Content Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            
            {/* Media Gallery Injection */}
            <section>
              <h2 className="card-title" style={{ marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Live System Visuals</h2>
              <MediaGallery images={study.images} video={study.video} />
            </section>

            {/* Before vs After */}
            <section className="card">
              <h2 className="card-title" style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>Transformation Analysis</h2>
              
              <div className="grid-2">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#FF5F57]">
                    <Target className="w-5 h-5" />
                    <h3 className="font-bold text-lg font-heading">The Bottleneck</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-body">
                    {study.problem}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#22C55E]">
                    <Zap className="w-5 h-5" />
                    <h3 className="font-bold text-lg font-heading">The AI Solution</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-body">
                    {study.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* Workflow Breakdown */}
            <section>
              <h2 className="card-title" style={{ marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Execution Pipeline</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>
                {/* Connecting Line */}
                <div style={{ position: "absolute", left: "1.5rem", top: "2rem", bottom: "2rem", width: "2px", background: "linear-gradient(to bottom, #22C55E, transparent)", opacity: 0.2 }} />
                
                {study.workflow.map((step, idx) => (
                  <div key={step.id} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", position: "relative", zIndex: 10 }}>
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "12px", backgroundColor: "#0A0F1A", border: "1px solid rgba(34, 197, 94, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 15px rgba(34,197,94,0.1)" }}>
                      <span className="text-[#22C55E] font-mono font-bold">{idx + 1}</span>
                    </div>
                    <div style={{ paddingTop: "0.75rem" }}>
                      <h4 className="card-title" style={{ marginBottom: "0.25rem", fontSize: "1.125rem" }}>{step.label}</h4>
                      <p className="body-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Tech Stack */}
            <div className="card">
              <h3 style={{ fontSize: "0.875rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Infrastructure Stack</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
                {study.tech.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                    <span className="text-white/80 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Panel */}
            <div style={{ background: "linear-gradient(to bottom, rgba(255, 122, 0, 0.1), transparent)", border: "1px solid rgba(255, 122, 0, 0.2)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <h3 className="card-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Deploy This System</h3>
              <p className="body-sm" style={{ marginBottom: "1.5rem" }}>
                Connect with our engineering team to build a bespoke replica of this framework for your organization.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Start Architecture Audit <ArrowRight style={{ width: "16px", height: "16px", marginLeft: "0.5rem" }} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
