export type Metric = {
  label: string;
  value: string;
};

export type WorkflowStep = {
  id: string;
  label: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  workflow: WorkflowStep[];
  results: Metric[];
  tech: string[];
  images: string[];
  video: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agrihealth",
    title: "AgriHealth Systems",
    category: "Logistics",
    problem: "Supply chain managers were manually verifying crop health logs across 12 different regional databases, leading to an average processing delay of 4 days before clearing shipments.",
    solution: "Deployed an autonomous intelligence layer that pulls from IoT field sensors and cross-references data logic in real-time, executing compliance workflows automatically.",
    workflow: [
      { id: "1", label: "Data Ingestion", description: "Sensors stream crop vitals to unified API." },
      { id: "2", label: "AI Verification", description: "Intelligence layer cross-checks compliance rules." },
      { id: "3", label: "Automated Clearance", description: "Shipment approved and routed to transport." }
    ],
    results: [
      { label: "Processing Time", value: "-92%" },
      { label: "Manual Errors", value: "0%" },
      { label: "Hours Saved/Mo", value: "400+" }
    ],
    tech: ["INDU Core", "IoT Stream", "Decision Engine"],
    video: "/CATLOGUE/1_AGRIHEALTH/Agrihealth.mp4",
    images: [
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth0959.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1009.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1017.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1133.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1156.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1206.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1548.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1615.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1624.png",
      "/CATLOGUE/1_AGRIHEALTH/Agrihealth1638.png"
    ]
  },
  {
    slug: "bytewear",
    title: "ByteWear Integrations",
    category: "E-Commerce",
    problem: "Scaling customer support volume required a 300% headcount increase, as agents were copy-pasting tracking data between Shopify, Zendesk, and carrier systems manually.",
    solution: "Integrated a semantic support agent capable of reading customer intent, fetching real-time carrier data, and autonomously issuing return labels to verified users.",
    workflow: [
      { id: "1", label: "Intent Parsing", description: "Customer emails parsed for context and sentiment." },
      { id: "2", label: "System Query", description: "Agent hits Shopify and carrier APIs." },
      { id: "3", label: "Action Dispatch", description: "Return label issued or tracking update sent." }
    ],
    results: [
      { label: "Ticket Deflection", value: "68%" },
      { label: "Resolution Time", value: "< 2 mins" },
      { label: "CSAT Score", value: "98/100" }
    ],
    tech: ["INDU Agent", "Zendesk API", "Shopify Events"],
    video: "/CATLOGUE/2_BYTEWEAR/Bytewear.mp4",
    images: [
      "/CATLOGUE/2_BYTEWEAR/Bytewear257.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear303.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear309.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear314.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear319.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear324.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear329.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear336.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear342.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear402.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear406.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear410.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear413.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear422.png",
      "/CATLOGUE/2_BYTEWEAR/Bytewear444.png"
    ]
  },
  {
    slug: "cook-and-craft",
    title: "Cook & Craft",
    category: "SaaS",
    problem: "Lead qualification was completely static. Sales reps were wasting 25 hours a week calling low-intent prospects while hot leads grew cold in the CRM queue.",
    solution: "Deployed a behavioral lead scoring system that triggers automatic personalized sequencing based on website activity and enriched firmographic data.",
    workflow: [
      { id: "1", label: "Lead Capture", description: "High-intent event triggers pipeline." },
      { id: "2", label: "Enrichment", description: "Clearbit data injected into profile." },
      { id: "3", label: "Agent Engagement", description: "Personalized cold email sequence fired." }
    ],
    results: [
      { label: "Sales Cycle", value: "-45%" },
      { label: "Meeting Booked", value: "+300%" },
      { label: "Pipeline Rev", value: "$2.1M" }
    ],
    tech: ["INDU Sales", "Salesforce API", "Clearbit"],
    video: "/CATLOGUE/3_COOK&CRAFT/Cook&Craft.mp4",
    images: [
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft246.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft256.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft319.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft326.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft332.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft339.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft348.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft355.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft410.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft418.png",
      "/CATLOGUE/3_COOK&CRAFT/Cook&Craft432.png"
    ]
  },
  {
    slug: "desifest",
    title: "Desifest Ops",
    category: "Events",
    problem: "Vendor onboarding and contract generation required a heavy operational team to manually draft 500+ unique agreements, bottlenecking the festival launch.",
    solution: "A generative AI document pipeline that autonomously drafts, redlines, and sends vendor contracts based on input forms and historical data.",
    workflow: [
      { id: "1", label: "Vendor Input", description: "Form data captured securely." },
      { id: "2", label: "Contract Gen", description: "LLM drafts specialized legal clauses." },
      { id: "3", label: "e-Signature", description: "Auto-routed to DocuSign via API." }
    ],
    results: [
      { label: "Contract Time", value: "3 mins" },
      { label: "Ops Cost", value: "-$120k" },
      { label: "Vendor Growth", value: "2x yoy" }
    ],
    tech: ["INDU DocGen", "DocuSign API", "Webhooks"],
    video: "/CATLOGUE/4_DESIFEST/Desifest.mp4",
    images: [
      "/CATLOGUE/4_DESIFEST/Desifest631.png",
      "/CATLOGUE/4_DESIFEST/Desifest641.png",
      "/CATLOGUE/4_DESIFEST/Desifest658.png",
      "/CATLOGUE/4_DESIFEST/Desifest704.png",
      "/CATLOGUE/4_DESIFEST/Desifest712.png",
      "/CATLOGUE/4_DESIFEST/Desifest719.png",
      "/CATLOGUE/4_DESIFEST/Desifest754.png",
      "/CATLOGUE/4_DESIFEST/Desifest804.png",
      "/CATLOGUE/4_DESIFEST/Desifest815.png",
      "/CATLOGUE/4_DESIFEST/Desifest826.png",
      "/CATLOGUE/4_DESIFEST/Desifest836.png",
      "/CATLOGUE/4_DESIFEST/Desifest844.png"
    ]
  },
  {
    slug: "onwardvet",
    title: "OnwardVet AI",
    category: "Healthcare",
    problem: "Veterinarians were spending over 2 hours daily transcribing medical notes into the PMS system instead of seeing patients.",
    solution: "A sophisticated voice-to-text RAG architecture that listens to consults, perfectly summarizes medical diagnoses, and natively syncs to patient records.",
    workflow: [
      { id: "1", label: "Voice Capture", description: "Ambient audio recorded during consult." },
      { id: "2", label: "Medical AI Rx", description: "LLM structures clinical notes accurately." },
      { id: "3", label: "PMS Sync", description: "Data mapped directly to patient ID chart." }
    ],
    results: [
      { label: "Note Accuracy", value: "99.2%" },
      { label: "Hours Saved/Wk", value: "14 hrs" },
      { label: "Patient Capacity", value: "+15%" }
    ],
    tech: ["INDU Healthcare", "Whisper", "RAG Engine"],
    video: "/CATLOGUE/5_ONWARDWET/OnwardVet.mp4",
    images: [
      "/CATLOGUE/5_ONWARDWET/OnwardVet22204.png",
      "/CATLOGUE/5_ONWARDWET/OnwardVet22211.png",
      "/CATLOGUE/5_ONWARDWET/OnwardVet22216.png",
      "/CATLOGUE/5_ONWARDWET/OnwardVet22238.png",
      "/CATLOGUE/5_ONWARDWET/OnwardVet22247.png"
    ]
  }
];
