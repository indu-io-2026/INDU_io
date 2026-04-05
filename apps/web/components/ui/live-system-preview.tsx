"use client";

import { useState, useEffect } from "react";
import {
  UserCheck,
  Brain,
  Database,
  Mail,
  CheckCircle,
  ArrowRight,
  Loader2,
  Play,
  RotateCcw,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserCheck,
    label: "Lead Captured",
    description: "Prospect submits form on website",
    detail: "Name: Alex Chen · Company: TechFlow · Role: VP Engineering",
    color: "#3B82F6",
    dimColor: "rgba(59,130,246,0.1)",
  },
  {
    id: 2,
    icon: Brain,
    label: "AI Agent Activated",
    description: "Analyzing lead score, intent & history",
    detail: "Score: 92/100 · Intent: High · Budget: Enterprise",
    color: "#8B5CF6",
    dimColor: "rgba(139,92,246,0.1)",
  },
  {
    id: 3,
    icon: Database,
    label: "CRM Synced",
    description: "Lead enriched and pushed to Salesforce",
    detail: "Stage: Qualified · Pipeline: $84,000 · Priority: Hot",
    color: "#FF7A00",
    dimColor: "rgba(255,122,0,0.1)",
  },
  {
    id: 4,
    icon: Mail,
    label: "Email Dispatched",
    description: "Personalized sequence launched automatically",
    detail: "Subject: 'Re: Scaling TechFlow's ops with AI' · Sent in 0.3s",
    color: "#22C55E",
    dimColor: "rgba(34,197,94,0.1)",
  },
];

export function LiveSystemPreview() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const runDemo = () => {
    setCurrentStep(-1);
    setCompleted(false);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (currentStep >= steps.length - 1) {
      setIsRunning(false);
      setCompleted(true);
      return;
    }
    const timer = setTimeout(
      () => setCurrentStep((s) => s + 1),
      currentStep === -1 ? 400 : 1600
    );
    return () => clearTimeout(timer);
  }, [isRunning, currentStep]);

  const reset = () => {
    setCurrentStep(-1);
    setIsRunning(false);
    setCompleted(false);
  };

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
              <div
                key={c}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            indu-system · live-workflow-preview
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.75rem",
              color: completed ? "#22C55E" : isRunning ? "#FF7A00" : "var(--text-muted)",
              padding: "0.25rem 0.625rem",
              borderRadius: "100px",
              background: completed
                ? "rgba(34,197,94,0.1)"
                : isRunning
                ? "rgba(255,122,0,0.1)"
                : "rgba(255,255,255,0.05)",
              border: `1px solid ${
                completed
                  ? "rgba(34,197,94,0.3)"
                  : isRunning
                  ? "rgba(255,122,0,0.3)"
                  : "rgba(255,255,255,0.08)"
              }`,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: completed
                  ? "#22C55E"
                  : isRunning
                  ? "#FF7A00"
                  : "var(--text-muted)",
                animation: isRunning ? "pulse-dot 1s ease-in-out infinite" : "none",
                display: "inline-block",
              }}
            />
            {completed ? "Completed" : isRunning ? "Running…" : "Ready"}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {steps.map((step, i) => {
            const isActive = currentStep === i;
            const isDone = currentStep > i;
            const Icon = step.icon;

            return (
              <div key={step.id}>
                {/* Step row */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1rem",
                    borderRadius: "12px",
                    background: isActive
                      ? step.dimColor
                      : isDone
                      ? "rgba(34,197,94,0.04)"
                      : "transparent",
                    border: `1px solid ${
                      isActive
                        ? `${step.color}4D`
                        : isDone
                        ? "rgba(34,197,94,0.2)"
                        : "transparent"
                    }`,
                    transition: "all 0.4s ease",
                    opacity: currentStep === -1 ? 0.5 : isDone || isActive ? 1 : 0.4,
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: isDone
                        ? "rgba(34,197,94,0.15)"
                        : isActive
                        ? step.dimColor
                        : "rgba(255,255,255,0.05)",
                      border: `1px solid ${
                        isDone
                          ? "rgba(34,197,94,0.4)"
                          : isActive
                          ? `${step.color}66`
                          : "rgba(255,255,255,0.08)"
                      }`,
                      transition: "all 0.4s ease",
                    }}
                  >
                    {isDone ? (
                      <CheckCircle size={18} color="#22C55E" />
                    ) : isActive ? (
                      <Loader2
                        size={18}
                        color={step.color}
                        style={{ animation: "spin-slow 1s linear infinite" }}
                      />
                    ) : (
                      <Icon size={18} color="var(--text-muted)" />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: isDone
                            ? "#22C55E"
                            : isActive
                            ? step.color
                            : "var(--text-secondary)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {step.label}
                      </span>
                      {isActive && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: step.color,
                            padding: "0.125rem 0.5rem",
                            background: step.dimColor,
                            borderRadius: "100px",
                            border: `1px solid ${step.color}33`,
                          }}
                        >
                          processing…
                        </span>
                      )}
                      {isDone && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: "#22C55E",
                            padding: "0.125rem 0.5rem",
                            background: "rgba(34,197,94,0.1)",
                            borderRadius: "100px",
                            border: "1px solid rgba(34,197,94,0.3)",
                          }}
                        >
                          ✓ done
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                        marginBottom: (isActive || isDone) ? "0.5rem" : 0,
                      }}
                    >
                      {step.description}
                    </p>
                    {(isActive || isDone) && (
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: isDone ? "#22C55E" : step.color,
                          background: isDone
                            ? "rgba(34,197,94,0.07)"
                            : step.dimColor,
                          border: `1px solid ${
                            isDone ? "rgba(34,197,94,0.2)" : `${step.color}33`
                          }`,
                          borderRadius: "8px",
                          padding: "0.5rem 0.75rem",
                          animation: "scale-in 0.3s ease",
                        }}
                      >
                        → {step.detail}
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2rem",
                      height: "24px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "2px",
                        height: "100%",
                        background: currentStep > i
                          ? "linear-gradient(180deg, #22C55E, rgba(34,197,94,0.3))"
                          : "rgba(255,255,255,0.07)",
                        borderRadius: "1px",
                        overflow: "hidden",
                      }}
                    >
                      {currentStep === i && isRunning && (
                        <div
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "50%",
                            background: `linear-gradient(180deg, transparent, ${steps[i]?.color}, transparent)`,
                            animation: "flow-down 0.8s linear infinite",
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.25rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div>
            {completed && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#22C55E",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                <CheckCircle size={16} />
                Workflow completed in 0.3s — Zero human intervention
              </div>
            )}
            {!completed && !isRunning && (
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                Click Run to see the AI system in action
              </p>
            )}
            {isRunning && (
              <p style={{ fontSize: "0.8125rem", color: "var(--accent-orange)" }}>
                AI system executing workflow…
              </p>
            )}
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {completed && (
              <button
                onClick={reset}
                className="btn btn-secondary btn-sm"
                style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
              >
                <RotateCcw size={13} /> Reset
              </button>
            )}
            <button
              onClick={runDemo}
              disabled={isRunning}
              className="btn btn-primary btn-sm"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                opacity: isRunning ? 0.7 : 1,
              }}
            >
              {isRunning ? (
                <Loader2 size={13} style={{ animation: "spin-slow 1s linear infinite" }} />
              ) : (
                <Play size={13} fill="white" />
              )}
              {completed ? "Run Again" : "Run Demo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
