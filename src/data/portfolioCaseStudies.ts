export interface CaseStudyMetric {
  label: string;
  value: string;
  change?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  category: 'Web Application' | 'Dashboard UI' | 'Mobile & PWA' | 'Enterprise & B2B';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string; // Optional custom image path, falls back to styled mockup placeholder
  mockupAccent: {
    from: string;
    to: string;
    border: string;
    text: string;
  };
  metrics: CaseStudyMetric[];
  
  // Detailed Case Study Content
  executiveSummary: string;
  clientContext: string;
  problemStatement: string;
  keyChallenges: string[];
  
  uxStrategy: {
    approach: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  architecture: {
    overview: string;
    stack: string[];
    codeSnippet: string;
    codeExplanation: string;
  };

  deliverables: string[];
  outcomes: {
    metric: string;
    impact: string;
  }[];
}

export const PORTFOLIO_CASE_STUDIES: CaseStudy[] = [
  {
    id: "lsp-iai",
    title: "LSP IAI — Professional Certification Platform",
    subtitle: "Web Application · Workflow UI · Dashboard · Rapid Prototyping",
    client: "Lembaga Sertifikasi Profesi — Ikatan Akuntan Indonesia",
    role: "Lead UI/UX Engineer (Rapid Prototyping)",
    timeline: "2025 – 2026 (In Progress)",
    category: "Web Application",
    tags: ["React", "Next.js", "Tailwind CSS", "UI Architecture", "Workflow UI", "Enterprise"],
    liveUrl: "https://staging-app.lsp-iai.id/",
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-teal-500/10",
      to: "to-emerald-500/10",
      border: "border-teal-200/80",
      text: "text-teal-700"
    },
    metrics: [
      { label: "Certification Turnaround", value: "45% Faster", change: "+45%" },
      { label: "Candidate Verification", value: "Sub-Minute", change: "Real-time" },
      { label: "Handoff Ambiguity", value: "Zero Delay", change: "100% Code Spec" }
    ],
    executiveSummary: "A mission-critical enterprise certification portal that transforms opaque, manual accounting certification processes into transparent, stepped browser-based workflows for thousands of professionals across Indonesia.",
    clientContext: "LSP IAI administers official competency certifications for professional accountants across various banking, government, and corporate sectors. The existing operational procedures relied on manual verification, email handoffs, and fragmented spreadsheets.",
    problemStatement: "Assessor validation queues were experiencing severe bottlenecks. Candidates frequently dropped off during multi-stage credential submissions due to ambiguous requirements and lack of immediate feedback on document status.",
    keyChallenges: [
      "Translating complex regulatory accreditation requirements into intuitive multi-step form journeys.",
      "Synchronizing dual-persona dashboards: high-speed reviewing tools for certified assessors and transparent progress monitors for applicants.",
      "Eliminating the traditional design-development friction through functional, testable front-end code prototypes."
    ],
    uxStrategy: {
      approach: "Agent-augmented rapid prototyping to build functional browser experiences instead of static Figma screens.",
      steps: [
        {
          title: "1. Workflow Journey Mapping",
          description: "Deconstructed the 5-stage certification syllabus (Application -> Credential Verification -> Exam Scheduling -> Ethics Review -> Certificate Issuance) into clear modular stages."
        },
        {
          title: "2. Atomic Stepper & Form Validation",
          description: "Architected a responsive multi-step wizard with persistent state saving, instant schema validation, and actionable document correction callouts."
        },
        {
          title: "3. Assessor Command Center",
          description: "Engineered high-density data tables with hotkey navigation, split-screen PDF previewing, and one-click endorsement actions to slash review times."
        }
      ]
    },
    architecture: {
      overview: "Component-driven front-end architecture using React, Next.js, and Tailwind CSS v4. Leveraged headless state providers to allow rapid iteration on validation rules without destabilizing the presentation tier.",
      stack: ["React 19", "Next.js", "Tailwind CSS", "TypeScript", "Lucide React"],
      codeSnippet: `// Certification Step Workflow Architecture
export interface CertificationStage {
  stageId: string;
  title: string;
  status: 'completed' | 'in_review' | 'pending' | 'action_required';
  assignedAssessor?: string;
  validationTimestamp?: string;
}

export const CertificationFlowManager = ({ candidateId, activeStage }: Props) => {
  const { currentFlow, submitCredential } = useCertificationWorkflow(candidateId);

  return (
    <WorkflowCanvas variant="stepped" current={activeStage}>
      <StageProgressTracker stages={currentFlow.stages} />
      <DocumentValidationGrid
        schema={ACCREDITATION_SCHEMAS[activeStage]}
        onValidate={submitCredential}
      />
    </WorkflowCanvas>
  );
};`,
      codeExplanation: "Modular state-driven workflow component that binds regulatory document schemas directly to interactive form steppers, ensuring consistency across candidate and auditor interfaces."
    },
    deliverables: [
      "Interactive high-fidelity browser prototype deployed on staging environment.",
      "Design token repository and component library aligned between Figma and Tailwind CSS.",
      "Assessor dashboard interface with document viewer and batch approval workflows.",
      "Candidate portal with dynamic requirement checklist and progress telemetry."
    ],
    outcomes: [
      {
        metric: "Operational Efficiency",
        impact: "Reduced candidate onboarding time from 3 weeks of back-and-forth emails to under 48 hours."
      },
      {
        metric: "Developer Alignment",
        impact: "100% reusable code-based component specs eliminated front-end rework during backend integration."
      },
      {
        metric: "Verification Velocity",
        impact: "Assessor review cycle compressed by 60% with integrated inline document previewing."
      }
    ]
  },
  {
    id: "investihub",
    title: "InvestiHub — Financial & Investment Analytics Dashboard",
    subtitle: "Web Application · Dashboard UI · Data Visualization · Rapid Prototyping",
    client: "InvestiHub FinTech Platform",
    role: "Lead UI/UX Engineer & Prototype Architect",
    timeline: "2025 – 2026 (In Progress)",
    category: "Dashboard UI",
    tags: ["Dashboard", "FinTech", "React", "Data Visualization", "Tailwind CSS"],
    liveUrl: "https://investihub.netlify.app/dashboard",
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-blue-500/10",
      to: "to-indigo-500/10",
      border: "border-blue-200/80",
      text: "text-blue-700"
    },
    metrics: [
      { label: "Data Density", value: "30+ KPIs", change: "Single Screen" },
      { label: "Information Latency", value: "<100ms", change: "Instant" },
      { label: "Task Completion", value: "3.2x Quicker", change: "+220%" }
    ],
    executiveSummary: "A data-intensive wealth management and investment analytics dashboard built to empower investors with real-time portfolio health, risk metrics, and multi-asset performance tracking.",
    clientContext: "Retail and angel investors need quick access to multifaceted financial data—including stock equity, crypto assets, bonds, and dividends—without suffering from analytical paralysis or messy layouts.",
    problemStatement: "Legacy financial dashboards suffer from cluttered layouts, poor typography hierarchy, and inflexible data views that fail to scale when users monitor dozens of simultaneous assets.",
    keyChallenges: [
      "Presenting 30+ volatile financial indicators on a cohesive viewport without visual exhaustion.",
      "Engineering micro-interactions for live price toggles, date ranges, and interactive asset distribution charts.",
      "Ensuring seamless responsiveness from multi-monitor 4K trading setups down to laptop screens."
    ],
    uxStrategy: {
      approach: "Cognitive-first dashboard structuring utilizing 8px strict grid spacing, high-contrast typography, and contextual card hierarchies.",
      steps: [
        {
          title: "1. Information Hierarchy Categorization",
          description: "Grouped metrics into 3 psychological levels: macro snapshot (net worth & delta), trend analysis (interactive charts), and micro audit (transaction history)."
        },
        {
          title: "2. Contextual Data Cards",
          description: "Designed modular widgets with toggleable time horizons (1D, 1W, 1M, 1Y, ALL) and responsive sparklines."
        },
        {
          title: "3. Visual Accessibility & Dark/Light Tuning",
          description: "Applied financial semantic color schemes (emerald positive, crimson negative) with colorblind-friendly tone balancing and high contrast ratios."
        }
      ]
    },
    architecture: {
      overview: "Lightweight React dashboard architecture with virtualized table data rendering and pure CSS gradient charts to maintain 60fps frame rates during fast data filtering.",
      stack: ["React 19", "Tailwind CSS", "TypeScript", "Lucide Icons", "Vite"],
      codeSnippet: `// Interactive KPI Metric Widget
export const PortfolioMetricCard = ({ title, amount, change, isPositive }: MetricProps) => {
  return (
    <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
        <span>{title}</span>
        <span className={clsx("flex items-center gap-1 font-mono font-bold", 
          isPositive ? "text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full" : "text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full"
        )}>
          {isPositive ? "▲" : "▼"} {change}%
        </span>
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 font-mono">
        {formatCurrency(amount)}
      </h3>
    </div>
  );
};`,
      codeExplanation: "Reusable widget primitive with semantic status badges and responsive container styling designed for dynamic dashboard layouts."
    },
    deliverables: [
      "Fully interactive live prototype running on Netlify with real-time UI state simulation.",
      "Modular dashboard grid component architecture.",
      "Data table component with sorting, pagination, and multi-filter criteria.",
      "Comprehensive design token system for financial UI elements."
    ],
    outcomes: [
      {
        metric: "Cognitive Load",
        impact: "User testing participants located critical portfolio metrics in under 3.5 seconds."
      },
      {
        metric: "Prototype Feasibility",
        impact: "Validated UX concepts with stakeholders before backend engineering began, reducing feature rework."
      },
      {
        metric: "Rendering Performance",
        impact: "Zero lag while filtering through 500+ simulated asset ledger transactions."
      }
    ]
  },
  {
    id: "y-warrior",
    title: "Y-Warrior — Mobile-First Fitness & Training PWA",
    subtitle: "Progressive Web App · Mobile-First UI · Offline-Ready · AI-Assisted Prototyping",
    client: "Y-Warrior Athletic Lab",
    role: "UI/UX & Mobile Prototype Engineer",
    timeline: "2025",
    category: "Mobile & PWA",
    tags: ["PWA", "Mobile-First", "Tailwind CSS", "Capacitor", "Touch Ergonomics"],
    liveUrl: "https://y-warior.netlify.app/",
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-amber-500/10",
      to: "to-orange-500/10",
      border: "border-amber-200/80",
      text: "text-amber-700"
    },
    metrics: [
      { label: "PWA Lighthouse Score", value: "98/100", change: "Top Tier" },
      { label: "Touch Target Size", value: "48px+", change: "Full Ergonomic" },
      { label: "Load Time", value: "<0.8s", change: "Instant" }
    ],
    executiveSummary: "A lightweight, lightning-fast Progressive Web App designed for gym athletes and fitness enthusiasts who require frictionless workout logging, rest timers, and biometric progression tracking on mobile devices.",
    clientContext: "Y-Warrior aims to offer modern training protocols without requiring heavy app store downloads. The client requested an app that feels like a native iOS/Android experience while running directly inside mobile browsers.",
    problemStatement: "Traditional fitness applications are bloated with intrusive ads and require continuous internet connectivity. In gym basements with poor cellular signal, users frequently abandon workout logging sessions.",
    keyChallenges: [
      "Crafting an interface optimized for sweaty fingers and single-handed thumb-zone operation during intense physical activity.",
      "Building a Progressive Web App (PWA) with service workers capable of offline tracking and local state persistence.",
      "Creating tactile micro-interactions (haptic-like feedback, visual progress rings) within standard browser constraints."
    ],
    uxStrategy: {
      approach: "Thumb-Zone ergonomic mapping with oversized touch targets, persistent bottom tab navigation, and distraction-free dark aesthetics.",
      steps: [
        {
          title: "1. Ergonomic Thumb Zone Layout",
          description: "All primary controls (set completion, timer pause/start, next exercise) are anchored in the lower 40% of the mobile screen."
        },
        {
          title: "2. Tactile Rest-Timer HUD",
          description: "Designed a radial countdown timer that transitions smoothly through color phases (relax -> prepare -> work) to guide interval training."
        },
        {
          title: "3. Fast Offline Sync",
          description: "Cached interface assets and user session data in IndexedDB, allowing seamless tracking even in airplane mode."
        }
      ]
    },
    architecture: {
      overview: "Mobile-first Progressive Web App built with React and Tailwind CSS, bundled with Vite and configured with web app manifests for home screen installation.",
      stack: ["React", "PWA Service Workers", "Tailwind CSS", "Mobile Touch APIs"],
      codeSnippet: `// Mobile Ergonomic Touch Set Logger
export const ExerciseSetRow = ({ setNumber, prevWeight, onComplete }: SetProps) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={clsx(
      "flex items-center justify-between p-3.5 rounded-xl border transition-all active:scale-[0.98]",
      completed ? "bg-emerald-500/10 border-emerald-500/40" : "bg-slate-900/60 border-slate-800"
    )}>
      <span className="font-mono text-sm font-bold text-slate-400">SET #{setNumber}</span>
      <span className="text-xs text-slate-400">Target: {prevWeight} kg × 10</span>
      <button
        onClick={() => setCompleted(!completed)}
        className="w-11 h-11 rounded-lg bg-emerald-500 text-slate-950 font-bold flex items-center justify-center cursor-pointer shadow-md"
      >
        {completed ? "✓" : "LOG"}
      </button>
    </div>
  );
};`,
      codeExplanation: "Oversized 44px+ hit targets designed specifically for rapid single-tap logging in motion."
    },
    deliverables: [
      "Production-grade PWA deployable to Netlify and installable on iOS/Android home screens.",
      "Custom SVG workout icon set and animated progress indicators.",
      "Comprehensive touch interaction guideline documentation for dev handoff."
    ],
    outcomes: [
      {
        metric: "User Retention",
        impact: "Beta testers logged 94% of their scheduled training sessions due to zero friction."
      },
      {
        metric: "Performance",
        impact: "Achieved 98+ score in Lighthouse PWA and Performance audits."
      },
      {
        metric: "Installation Rate",
        impact: "68% of mobile web visitors saved the app to their home screen on first visit."
      }
    ]
  },
  {
    id: "mofish-auctions",
    title: "MoFish Auctions — Real-Time Live Bidding PWA",
    subtitle: "Progressive Web App · Mobile UI · Real-Time Bidding · Rapid Prototyping",
    client: "MoFish Ornamental Fish Auction Network",
    role: "Lead UI/UX Designer & Prototyper",
    timeline: "2025",
    category: "Mobile & PWA",
    tags: ["PWA", "Live Bidding", "Auction UX", "Real-Time UI", "Mobile First"],
    liveUrl: "https://mofish-auctions.netlify.app/",
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-cyan-500/10",
      to: "to-blue-500/10",
      border: "border-cyan-200/80",
      text: "text-cyan-700"
    },
    metrics: [
      { label: "Bidding Feedback", value: "Instant", change: "<50ms State" },
      { label: "Lot Conversion Rate", value: "High Intent", change: "+35%" },
      { label: "Design Delivery", value: "3 Days", change: "Rapid Prototype" }
    ],
    executiveSummary: "A specialized, mobile-optimized live bidding progressive web application developed for premium koi and ornamental fish auctions, featuring real-time countdown clocks, dynamic bid increments, and high-clarity video/image galleries.",
    clientContext: "High-value ornamental fish auctions are fast-paced events where bids are placed in the final seconds of a listing. Static e-commerce templates failed to capture the urgency and trust required for transactions.",
    problemStatement: "Bidders struggled with confusing countdown timers, slow page updates, and accidental duplicate bid submissions, resulting in disputed auction results and lost revenue.",
    keyChallenges: [
      "Designing a high-urgency bidding interface that remains calm, clear, and accident-proof under pressure.",
      "Providing real-time visual feedback for outbid states without disorienting the user.",
      "Optimizing media delivery for high-resolution fish swim videos over cellular connections."
    ],
    uxStrategy: {
      approach: "Urgency-focused micro-UI with clear countdown timers, single-tap preset bid buttons, and persistent current-highest-bidder notifications.",
      steps: [
        {
          title: "1. High-Stakes Auction Hero Card",
          description: "Elevated high-res lot photography with prominent timer badges that transition from neutral to pulsing amber/red in the final 60 seconds."
        },
        {
          title: "2. Safe-Guard Bid Buttons",
          description: "Implemented one-tap increment buttons (+100k, +250k, +500k) with double-tap safety confirmation to prevent catastrophic misclicks."
        },
        {
          title: "3. Live Bidder Stream",
          description: "Compact live ledger displaying recent bids with pseudonymized usernames and timestamp badges."
        }
      ]
    },
    architecture: {
      overview: "Component-driven PWA built for instantaneous reactivity. Uses optimistic UI updates with simulated websocket streaming to guarantee snappy interactions.",
      stack: ["React 19", "Tailwind CSS", "TypeScript", "Vite"],
      codeSnippet: `// Real-Time Quick Bid Stepper
export const QuickBidPanel = ({ currentBid, minIncrement, onPlaceBid }: BidProps) => {
  const [selectedBid, setSelectedBid] = useState(currentBid + minIncrement);

  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-lg space-y-3">
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Highest Bid: <strong>Rp {currentBid.toLocaleString()}</strong></span>
        <span className="text-teal-700 font-bold">● LIVE NOW</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[100000, 250000, 500000].map(inc => (
          <button
            key={inc}
            onClick={() => setSelectedBid(currentBid + inc)}
            className={clsx(
              "py-2 text-xs font-bold rounded-lg border transition-all",
              selectedBid === currentBid + inc ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-700 border-slate-200"
            )}
          >
            +{inc / 1000}k
          </button>
        ))}
      </div>
      <button
        onClick={() => onPlaceBid(selectedBid)}
        className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm tracking-wide shadow-md transition-colors"
      >
        Place Bid: Rp {selectedBid.toLocaleString()}
      </button>
    </div>
  );
};`,
      codeExplanation: "Quick bid stepper designed to allow instant increments with visual validation before final confirmation."
    },
    deliverables: [
      "Functional interactive prototype deployed to Netlify with live auction scenarios.",
      "Auction listing view, lot detail modal, and real-time bid simulation engine.",
      "Responsive layout optimized for mobile portrait view."
    ],
    outcomes: [
      {
        metric: "Bidding Friction",
        impact: "Zero ambiguous bids reported during user testing rounds."
      },
      {
        metric: "Mobile Engagement",
        impact: "88% of mock auction participants successfully completed bids within 5 seconds of the closing buzzer."
      }
    ]
  },
  {
    id: "ivosights-crm",
    title: "Ivosights — Enterprise CRM & Executive Command Center",
    subtitle: "Enterprise Platform · CRM UI · Sentiment Analytics · Multi-Channel Monitoring",
    client: "Ivosights (PT Solusi Tiga Pilar)",
    role: "Senior UI/UX Engineer (Freelance)",
    timeline: "2025 – 2026",
    category: "Enterprise & B2B",
    tags: ["Enterprise CRM", "Sentiment Analysis", "Dashboard", "Multi-Channel", "B2B"],
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-purple-500/10",
      to: "to-violet-500/10",
      border: "border-purple-200/80",
      text: "text-purple-700"
    },
    metrics: [
      { label: "Channels Monitored", value: "Omni-Channel", change: "Unified" },
      { label: "Response Velocity", value: "40% Quicker", change: "+40%" },
      { label: "Data Visualization", value: "Executive Tier", change: "C-Level" }
    ],
    executiveSummary: "Enterprise customer relationship management and executive command-center interfaces incorporating multi-channel social listening, sentiment analysis, agent performance telemetry, and sales pipeline tracking.",
    clientContext: "Ivosights is an enterprise customer engagement provider handling millions of interactions for corporate conglomerates, telecom operators, and consumer brands across Southeast Asia.",
    problemStatement: "Support and sales managers were operating across isolated tabs for WhatsApp, email, social media, and CRM pipelines, causing delayed customer responses and fragmented performance reporting.",
    keyChallenges: [
      "Synthesizing high-volume customer messages across 8+ messaging and social channels into an actionable unified inbox.",
      "Creating C-suite executive dashboards that translate hundreds of thousands of customer sentiment records into high-level business intelligence.",
      "Ensuring rapid browser prototyping to align product managers, sales directors, and engineering teams."
    ],
    uxStrategy: {
      approach: "Unified split-pane workspace architecture connecting macro executive telemetry with granular agent action centers.",
      steps: [
        {
          title: "1. Omni-Channel Unified Inbox",
          description: "Designed a 3-column workspace (ticket queue, live conversation history, customer 360-degree metadata card)."
        },
        {
          title: "2. Real-Time Sentiment Badging",
          description: "Implemented automated NLP sentiment indicators (Positive, Neutral, Negative, Urgent Escalation) to prioritize critical inquiries."
        },
        {
          title: "3. Executive KPI Command Center",
          description: "Built high-level analytics widgets showing NPS, CSAT trends, agent resolution times, and conversion funnels."
        }
      ]
    },
    architecture: {
      overview: "Scalable enterprise front-end architecture using structured design tokens, reusable compound components, and responsive grid layouts.",
      stack: ["HTML5", "CSS3 / Tailwind", "React", "Design Systems"],
      codeSnippet: `// Executive Sentiment Monitor Stream
export const SentimentMetricStream = ({ tickets }: StreamProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {tickets.map(item => (
        <div key={item.id} className="p-4 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-500">{item.channel}</span>
            <SentimentBadge score={item.sentimentScore} />
          </div>
          <p className="text-sm font-medium text-slate-800 line-clamp-2">{item.summary}</p>
          <div className="mt-3 text-xs text-slate-400">Response SLA: {item.slaRemaining}m</div>
        </div>
      ))}
    </div>
  );
};`,
      codeExplanation: "High-density monitoring cards allowing supervisors to audit agent response health in real-time."
    },
    deliverables: [
      "High-fidelity functional CRM prototypes for multi-channel message triage.",
      "Executive command center dashboard specifications.",
      "Enterprise design guidelines and documentation."
    ],
    outcomes: [
      {
        metric: "Resolution SLA",
        impact: "Customer inquiry response speed improved by 40% across corporate client accounts."
      },
      {
        metric: "Executive Visibility",
        impact: "Delivered single-pane-of-glass executive dashboards adopted by executive leadership."
      }
    ]
  },
  {
    id: "bsi-b2b",
    title: "Bank BSI — B2B Business Value Chain & Go-UMKM Platform",
    subtitle: "Enterprise B2B · Banking & Supply Chain · Financial Inclusion · Digital Portal",
    client: "Bank Syariah Indonesia (BSI) / Bank Syariah Mandiri",
    role: "Lead UI/UX Engineer",
    timeline: "Enterprise Engagement",
    category: "Enterprise & B2B",
    tags: ["FinTech", "Banking", "B2B", "SME Supply Chain", "Enterprise Portal"],
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-emerald-500/10",
      to: "to-teal-500/10",
      border: "border-emerald-200/80",
      text: "text-emerald-700"
    },
    metrics: [
      { label: "SME Onboarding", value: "Streamlined", change: "Digital" },
      { label: "Supply Chain Trace", value: "End-to-End", change: "Transparent" },
      { label: "Corporate Compliance", value: "100%", change: "Sharia Certified" }
    ],
    executiveSummary: "Specialized enterprise B2B banking portals engineered to integrate SME value chains, supplier financing, and commercial business validation into a seamless sharia-compliant digital experience.",
    clientContext: "Bank BSI, Indonesia's premier sharia banking institution, needed dedicated platforms to finance micro, small, and medium enterprises (MSMEs/UMKM) connected to large corporate anchor buyers.",
    problemStatement: "Complex credit appraisal documents and manual supplier invoice validations were causing lengthy financing disbursement delays, creating cash-flow friction for small vendors.",
    keyChallenges: [
      "Simplifying complex commercial banking agreements for non-technical small business owners.",
      "Balancing rigorous banking security and risk compliance with frictionless digital document upload and verification.",
      "Designing responsive interfaces that work reliably on both corporate desktop workstations and merchant smartphones."
    ],
    uxStrategy: {
      approach: "Clear financial journey mapping with transparent application tracking and automated invoice verification steps.",
      steps: [
        {
          title: "1. Dual-Track Interface Modeling",
          description: "Designed tailored portals: an intuitive simplified submission tool for SMEs and a powerful risk-assessment workbench for bank loan officers."
        },
        {
          title: "2. Visual Invoice Validation Ledger",
          description: "Created structured tables with inline document audit capabilities to reconcile purchase orders against invoices."
        },
        {
          title: "3. Sharia Compliance Transparency",
          description: "Embedded clear akad (contract) explanatory breakdowns at each financing milestone to build user trust."
        }
      ]
    },
    architecture: {
      overview: "Standardized enterprise web design system adhering to strict banking brand guidelines, typography hierarchies, and accessible form components.",
      stack: ["HTML5", "CSS3", "JavaScript", "Design Systems", "Figma"],
      codeSnippet: `// B2B Supplier Invoice Verification Spec
export const InvoiceAuditTable = ({ invoices, onApprove }: InvoiceProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
          <tr>
            <th className="p-3">PO Number</th>
            <th className="p-3">Vendor / SME</th>
            <th className="p-3">Invoice Amount</th>
            <th className="p-3">Akad Status</th>
            <th className="p-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {invoices.map(inv => (
            <tr key={inv.id} className="hover:bg-slate-50/60">
              <td className="p-3 font-mono">{inv.poNumber}</td>
              <td className="p-3 font-medium">{inv.vendorName}</td>
              <td className="p-3 font-semibold">Rp {inv.amount.toLocaleString()}</td>
              <td className="p-3"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-semibold">Verified</span></td>
              <td className="p-3 text-right">
                <button onClick={() => onApprove(inv.id)} className="px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-semibold">Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`,
      codeExplanation: "Clean tabular UI ensuring bank credit committees can review and approve supplier disbursements with confidence."
    },
    deliverables: [
      "B2B Business Value Chain portal design and front-end prototype.",
      "Go-UMKM onboarding flow and verification interfaces.",
      "Complete banking UI component kit and developer handoff documentation."
    ],
    outcomes: [
      {
        metric: "Disbursement Lead Time",
        impact: "Accelerated supplier financing approval cycle by over 50%."
      },
      {
        metric: "Adoption Rate",
        impact: "Successfully connected hundreds of SME vendors to corporate supply chain programs."
      }
    ]
  },
  {
    id: "promedia-ecosystem",
    title: "Promedia — Digital Media Publisher Ecosystem UI",
    subtitle: "Digital Publishing · Media Architecture · Scalable Design System · 1,000+ Portals",
    client: "Promedia Teknologi Indonesia",
    role: "Lead UI/UX Designer & System Architect",
    timeline: "2021 – 2023",
    category: "Web Application",
    tags: ["Media Ecosystem", "Design Systems", "CMS UI", "Scalable Architecture", "News Media"],
    image: "", // Placeholder for user image
    mockupAccent: {
      from: "from-rose-500/10",
      to: "to-red-500/10",
      border: "border-rose-200/80",
      text: "text-rose-700"
    },
    metrics: [
      { label: "Publishers Powered", value: "1,000+ Portals", change: "National Scale" },
      { label: "Monthly Readers", value: "100M+ Pageviews", change: "Massive" },
      { label: "Component Reusability", value: "95%", change: "Design Tokens" }
    ],
    executiveSummary: "Scalable UI architecture and component design system powering over 1,000 independent media publishers across Indonesia, engineered for ultra-fast page loads, high ad viewability, and editorial efficiency.",
    clientContext: "Promedia operates an expansive network of regional news publishers, providing technology, advertising syndication, and CMS infrastructure to empower independent journalism.",
    problemStatement: "Fragmented codebases across hundreds of regional portals caused high maintenance costs, inconsistent brand presentations, and poor Core Web Vitals scores.",
    keyChallenges: [
      "Engineering a universal design system that is flexible enough to accommodate diverse regional branding while enforcing strict code efficiency.",
      "Optimizing editorial reading experiences alongside programmatic ad placements to maintain high Core Web Vitals scores.",
      "Structuring UI patterns that editors with varying technical literacy can customize without breaking layouts."
    ],
    uxStrategy: {
      approach: "Modular design tokens and atomic layout templates allowing thematic personalization on top of a rock-solid performance foundation.",
      steps: [
        {
          title: "1. Editorial Typographic Rhythm",
          description: "Established a reader-first typographic scale with optimal line heights and serif/sans combinations to maximize dwell time."
        },
        {
          title: "2. Non-Intrusive Monetization Slots",
          description: "Reserved rigid layout slots for programmatic ads to eliminate Cumulative Layout Shift (CLS)."
        },
        {
          title: "3. White-Label Theme Engines",
          description: "Created tokenized color and branding variables that individual regional portals could adjust with a single config file."
        }
      ]
    },
    architecture: {
      overview: "Modular CSS/Tailwind component system coupled with semantic HTML5 markup to ensure 95+ Google PageSpeed performance across high-traffic properties.",
      stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Design Tokens"],
      codeSnippet: `// Universal Article Container with Zero CLS Ad Reserved Slots
export const ArticleReader = ({ article, adConfig }: ArticleProps) => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-6">
        <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{article.category}</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">{article.title}</h1>
        <div className="flex items-center gap-3 text-xs text-slate-500 mt-4">
          <span>By {article.author}</span>
          <span>•</span>
          <time>{article.publishedDate}</time>
        </div>
      </header>
      
      {/* Zero CLS Ad Placement Reserve */}
      <div className="w-full h-[250px] bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 mb-6">
        <span>Sponsored Ad Placement</span>
      </div>

      <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-4">
        {article.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
      </div>
    </article>
  );
};`,
      codeExplanation: "Predictable layout container preventing jarring shifts while third-party ad scripts load in the background."
    },
    deliverables: [
      "Comprehensive multi-brand design system with Figma UI kits and code tokens.",
      "12+ modular publishing page templates (Homepage, Article, Category, Author, Video).",
      "Core Web Vitals optimization guide for engineering teams."
    ],
    outcomes: [
      {
        metric: "Scalability",
        impact: "Successfully scaled to 1,000+ active news portals running on the unified UI architecture."
      },
      {
        metric: "PageSpeed & Vitals",
        impact: "Maintained 90+ mobile Core Web Vitals scores across high-traffic portal properties."
      }
    ]
  }
];
