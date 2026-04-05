"use client";

import { useState, useMemo } from "react";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);

  const { annualSaved, timeSaved, roi, monthsToBreakEven } = useMemo(() => {
    const weeklyWaste = employees * hourlyRate * hoursPerWeek;
    const annualWaste = weeklyWaste * 52;
    const automationRate = 0.72; // INDU automates ~72% of manual tasks
    const annualSaved = Math.round(annualWaste * automationRate);
    const timeSaved = Math.round(hoursPerWeek * employees * automationRate * 52);
    const estimatedCost = Math.min(Math.max(employees * 600, 3000), 25000);
    const roi = Math.round(((annualSaved - estimatedCost) / estimatedCost) * 100);
    const monthsToBreakEven = Math.max(1, Math.round((estimatedCost / annualSaved) * 12));
    return { annualSaved, timeSaved, roi, monthsToBreakEven };
  }, [employees, hourlyRate, hoursPerWeek]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const formatHours = (h: number) => {
    if (h > 1000) return `${(h / 1000).toFixed(1)}k hrs`;
    return `${h} hrs`;
  };

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "1.5rem 1.75rem",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,122,0,0.04)",
        }}
      >
        <div className="section-label" style={{ marginBottom: "0.5rem" }}>
          ROI Calculator
        </div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Calculate Your Automation ROI
        </h3>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
          Based on 72% average automation rate across INDU deployments
        </p>
      </div>

      {/* Inputs */}
      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Employees */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.625rem",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              <Users size={14} color="var(--accent-orange)" />
              Team size
            </label>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--accent-orange)",
              }}
            >
              {employees} people
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={200}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="roi-slider"
            style={{
              background: `linear-gradient(to right, var(--accent-orange) ${(employees / 200) * 100}%, rgba(255,255,255,0.1) ${(employees / 200) * 100}%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "0.25rem",
            }}
          >
            <span>1</span><span>200</span>
          </div>
        </div>

        {/* Hourly Rate */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.625rem",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              <DollarSign size={14} color="var(--accent-orange)" />
              Avg. hourly rate
            </label>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--accent-orange)",
              }}
            >
              ${hourlyRate}/hr
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={200}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="roi-slider"
            style={{
              background: `linear-gradient(to right, var(--accent-orange) ${((hourlyRate - 10) / 190) * 100}%, rgba(255,255,255,0.1) ${((hourlyRate - 10) / 190) * 100}%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "0.25rem",
            }}
          >
            <span>$10</span><span>$200</span>
          </div>
        </div>

        {/* Hours per week */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.625rem",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              <Clock size={14} color="var(--accent-orange)" />
              Manual hours / week per person
            </label>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--accent-orange)",
              }}
            >
              {hoursPerWeek} hrs
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="roi-slider"
            style={{
              background: `linear-gradient(to right, var(--accent-orange) ${(hoursPerWeek / 40) * 100}%, rgba(255,255,255,0.1) ${(hoursPerWeek / 40) * 100}%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "0.25rem",
            }}
          >
            <span>1</span><span>40</span>
          </div>
        </div>

        {/* Results */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(255,122,0,0.08), rgba(255,122,0,0.03))",
            border: "1px solid var(--accent-orange-border)",
            borderRadius: "14px",
            padding: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent-orange)",
              marginBottom: "1rem",
            }}
          >
            Your Estimated Annual ROI
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: DollarSign,
                label: "Annual Cost Saved",
                value: formatCurrency(annualSaved),
                highlight: true,
              },
              {
                icon: TrendingUp,
                label: "ROI",
                value: `${roi}%`,
                highlight: true,
              },
              {
                icon: Clock,
                label: "Hours Freed / Year",
                value: formatHours(timeSaved),
                highlight: false,
              },
              {
                icon: TrendingUp,
                label: "Break-Even",
                value: `${monthsToBreakEven} month${monthsToBreakEven !== 1 ? "s" : ""}`,
                highlight: false,
              },
            ].map(({ icon: Icon, label, value, highlight }) => (
              <div key={label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Icon
                    size={12}
                    color={highlight ? "var(--accent-orange)" : "var(--text-muted)"}
                  />
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: highlight ? "1.5rem" : "1.125rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: highlight ? "var(--accent-orange)" : "#fff",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            * Based on INDU&apos;s average 72% automation rate. Actual results vary by implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
