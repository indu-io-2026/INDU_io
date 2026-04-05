export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "14rem 1fr",
      }}
    >
      <aside
        style={{
          borderRight: "1px solid color-mix(in srgb, var(--foreground) 12%, transparent)",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: "1rem" }}>SaaS</div>
        <p style={{ opacity: 0.75 }}>Dashboard shell placeholder.</p>
      </aside>
      <div>{children}</div>
    </div>
  );
}
