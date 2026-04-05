export type ProductSystem = {
  slug: string;
  title: string;
  category: "AI Agents" | "Workflow Systems" | "Infrastructure";
  description: string;
  inputs: string[];
  outputs: string[];
  integrations: string[];
  workflow: {
    step: string;
    description: string;
  }[];
};

export const products: ProductSystem[] = [
  {
    slug: "sales-orchestrator",
    title: "Sales Orchestrator",
    category: "AI Agents",
    description: "An autonomous agent that captures leads, cross-references internal firmographic data, and deploys hyper-personalized outbound sequences tailored to individual buyer intent.",
    inputs: ["Form Submittals", "Web Analytics", "Cold Lists"],
    outputs: ["CRM Entry", "Email Sequences", "Slack Alerts"],
    integrations: ["Salesforce", "Clearbit", "HubSpot", "Slack"],
    workflow: [
      { step: "Intake", description: "Lead information securely captured." },
      { step: "Enrichment", description: "Historical and API firmographic data layered." },
      { step: "Execution", description: "Sales intent model triggers correct sequence." }
    ]
  },
  {
    slug: "support-triage",
    title: "Support Triage Engine",
    category: "AI Agents",
    description: "Resolve tier-1 tickets instantly by connecting documentation directly to a conversational agent capable of triggering actual backend system changes (like refunds or shipping updates).",
    inputs: ["Customer Emails", "Live Chat", "Ticket APIs"],
    outputs: ["Drafted Responses", "System Refunds", "Label Generation"],
    integrations: ["Zendesk", "Shopify", "Stripe", "Gorgias"],
    workflow: [
      { step: "Listen", description: "Customer submits a natural language support ticket." },
      { step: "Parse & Fetch", description: "Intent parsed. Shipping/payment statuses fetched via API." },
      { step: "Resolve", description: "Action executed or escalated to human agent." }
    ]
  },
  {
    slug: "doc-gen-pipeline",
    title: "Document Gen Pipeline",
    category: "Workflow Systems",
    description: "Turn raw incoming form data or disjointed files into perfectly formatted, legally compliant PDFs, contracts, and proposals automatically without human copying and pasting.",
    inputs: ["Typeform", "Raw PDFs", "CRM Fields"],
    outputs: ["Formatted PDFs", "Docusign Links", "Email Attachments"],
    integrations: ["DocuSign", "Google Drive", "Typeform", "Salesforce"],
    workflow: [
      { step: "Trigger", description: "Form completion event fired." },
      { step: "Compile", description: "LLM dynamically populates custom clauses and logic." },
      { step: "Deliver", description: "Document signed, stored, and sent." }
    ]
  },
  {
    slug: "event-router",
    title: "Universal Event Router",
    category: "Infrastructure",
    description: "The backbone of your operations. A completely custom, serverless message bus that connects legacy on-premise systems with modern cloud APIs using low-latency translation models.",
    inputs: ["Webhooks", "Database Polling", "IoT Streams"],
    outputs: ["Translated Payloads", "Database Ingestion", "Analytics Pipelines"],
    integrations: ["AWS", "PostgreSQL", "Snowflake", "Datadog"],
    workflow: [
      { step: "Ingest", description: "Millions of events caught asynchronously." },
      { step: "Transform", description: "Complex data mapped efficiently to schemas." },
      { step: "Route", description: "Payload correctly dropped to end destinations." }
    ]
  }
];
