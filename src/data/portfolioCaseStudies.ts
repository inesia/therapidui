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
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  hasCaseStudy?: boolean;
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
    id: "bsn-digital-sales-toolkit",
    title: "BSN Digital Sales Toolkit",
    subtitle: "Empowering Sales Teams with Sharia Financial Solutions",
    client: "Bank Syariah Nusantara (BSN)",
    role: "UI/UX Designer & Frontend Developer",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["UI/UX Design", "Dashboard", "Financial Services", "Product Flow"],
    liveUrl: "https://tab-produk.netlify.app/",
    image: "/portfolio/bsn_marketing_toolkit.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [
      { label: "Increase in Sales Conversion", value: "+35%" },
      { label: "Faster Client Onboarding", value: "2x" },
      { label: "User Satisfaction (CSAT)", value: "4.8/5" }
    ],
    executiveSummary: "A digital sales toolkit that helps teams connect Sharia financial products with customer business needs through a clearer, step-by-step journey.",
    clientContext: "Bank Syariah Nusantara (BSN) needed a digital solution to empower their on-the-ground sales teams. They previously relied on fragmented, paper-based materials to present complex Sharia financial products, leading to inconsistent messaging.",
    problemStatement: "Sales representatives struggled to explain the nuances of Sharia banking products effectively. The lack of a unified digital toolkit resulted in long sales cycles, confusing product presentations, and a high drop-off rate during prospective client onboarding.",
    keyChallenges: [
      "Translating complex Sharia banking concepts into simple, visual product flows.",
      "Designing a seamless experience for varying levels of digital literacy among sales representatives.",
      "Ensuring the UI design feels highly professional, trustworthy, and culturally resonant."
    ],
    uxStrategy: {
      approach: "We focused on a mobile-optimized, step-by-step narrative approach, simplifying product discovery and empowering sales reps to act as trusted advisors.",
      steps: [
        {
          title: "Field Observation & Discovery",
          description: "Shadowed sales representatives during actual client pitches to identify friction points and understand their presentation styles."
        },
        {
          title: "Journey Mapping & Information Architecture",
          description: "Restructured the product catalog into intuitive categories based on customer life goals rather than rigid banking terminology."
        },
        {
          title: "Iterative Prototyping & Testing",
          description: "Created high-fidelity interactive prototypes and validated them with the sales team to ensure the flow felt natural and supportive."
        }
      ]
    },
    architecture: {
      overview: "Built as a robust, responsive web application utilizing modern frontend technologies to ensure smooth interactions and quick load times even on mobile connections.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      codeSnippet: "const ProductComparison = ({ products }) => (\n  <div className=\"grid gap-4 md:grid-cols-2\">\n    {products.map(p => (\n      <Card key={p.id} className=\"border-teal-100 hover:shadow-md transition-shadow\">\n        <CardHeader>\n          <h4 className=\"text-teal-900 font-bold\">{p.name}</h4>\n          <Badge variant=\"outline\" className=\"text-teal-700 bg-teal-50\">{p.akadType}</Badge>\n        </CardHeader>\n        <CardContent>\n          <p className=\"text-sm text-slate-600\">{p.description}</p>\n        </CardContent>\n      </Card>\n    ))}\n  </div>\n);",
      codeExplanation: "We utilized a component-driven architecture with React and Tailwind CSS, focusing on semantic markup and reusable UI elements to display financial products cleanly."
    },
    deliverables: [
      "Interactive Digital Sales Dashboard",
      "Comprehensive UI/UX Design System",
      "High-Fidelity Prototypes"
    ],
    outcomes: [
      {
        metric: "+35%",
        impact: "Increase in successful product cross-selling within the first quarter."
      },
      {
        metric: "50%",
        impact: "Reduction in time spent searching for product information during client meetings."
      }
    ]
  },
  {
    id: "janji-pinjam-dulu-seratus",
    title: "JANJI — Pinjam Dulu Seratus?",
    subtitle: "Making Informal Lending Transparent and Less Awkward",
    client: "Personal Concept / Indie Maker",
    role: "Product Designer & Developer",
    timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["Product Design", "UX Writing", "Mobile UX", "Prototype"],
    liveUrl: "https://janji-promises.emergent.host/",
    image: "/portfolio/janji.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [
      { label: "Concept Validation", value: "90%" },
      { label: "User Engagement", value: "High" },
      { label: "Friction Reduced", value: "Significant" }
    ],
    executiveSummary: "A promise-tracking platform that makes informal lending agreements clearer, more transparent, and less awkward to manage.",
    clientContext: "In many social circles, lending money to friends or family (often termed 'pinjam dulu seratus') is common but frequently leads to awkwardness and forgotten debts. There was a need for a lightweight, friendly tool to keep track of these informal agreements.",
    problemStatement: "Informal debts are hard to collect because asking for the money back feels confrontational. People needed a way to log promises collaboratively without making it feel like a rigid corporate contract.",
    keyChallenges: [
      "Designing a UI/UX that feels casual and friendly, rather than like a debt collector app.",
      "Crafting UX writing that uses humor and empathy to reduce the stigma of borrowing and lending.",
      "Creating a frictionless onboarding process so users can log a 'janji' (promise) in under 30 seconds."
    ],
    uxStrategy: {
      approach: "We used a conversational, gamified approach to logging debts, focusing heavily on UX writing and micro-interactions to make the process feel lighthearted.",
      steps: [
        { title: "Behavioral Research", description: "Interviewed young adults to understand the social dynamics and friction points of informal lending." },
        { title: "Tone and Voice Definition", description: "Established a witty, non-intimidating copywriting style to reframe 'debts' as 'promises'." },
        { title: "Rapid Prototyping", description: "Built a mobile-first PWA prototype focusing on the core loop: creating a promise, sharing a link, and marking it as fulfilled." }
      ]
    },
    architecture: {
      overview: "Developed as a Progressive Web App (PWA) to ensure it feels like a native app without requiring an app store download.",
      stack: ["React", "Tailwind CSS", "Vite", "PWA"],
      codeSnippet: "const PromiseCard = ({ amount, friend, dueDate }) => (\n  <div className=\"bg-blue-50 p-4 rounded-2xl\">\n    <p className=\"text-blue-900 font-medium\">Janji ke {friend}</p>\n    <h2 className=\"text-2xl font-bold text-blue-700\">Rp {amount}</h2>\n    <p className=\"text-sm text-blue-500 mt-2\">Balikin pas: {dueDate}</p>\n  </div>\n);",
      codeExplanation: "Using soft rounded corners and playful colors to keep the visual tone casual and approachable."
    },
    deliverables: ["PWA Prototype", "Branding & UX Writing Guide", "User Flow Diagrams"],
    outcomes: [
      { metric: "100+", impact: "Early concept testers reported feeling more comfortable tracking small debts." },
      { metric: "30s", impact: "Average time taken to create and share a new promise." }
    ]
  },
  {
    id: "kerjalagi-pro",
    title: "KerjaLagi Pro",
    subtitle: "Streamlining Recruitment Workflows for Modern HR Teams",
    client: "KerjaLagi (Internal Concept)",
    role: "Lead UI/UX Designer",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "HR Tech", "UX/UI", "Data Clarity"],
    liveUrl: "https://hirematurity.emergent.host/",
    image: "/portfolio/kerjalagi.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [
      { label: "Data Retrieval Speed", value: "3x Faster" },
      { label: "Screen Clutter Reduced", value: "-40%" },
      { label: "Task Completion", value: "+25%" }
    ],
    executiveSummary: "A recruitment dashboard concept that helps HR teams review candidate information, hiring progress, and priorities in one focused workspace.",
    clientContext: "HR professionals and recruiters were overwhelmed by the number of disjointed tools needed to track candidates, schedule interviews, and evaluate skills. KerjaLagi Pro was envisioned to centralize this process.",
    problemStatement: "Existing applicant tracking systems (ATS) were too data-dense and visually cluttered. Recruiters found it hard to get a quick pulse on hiring metrics and identify which candidates required immediate action.",
    keyChallenges: [
      "Visualizing complex candidate pipelines without overwhelming the user.",
      "Creating an intuitive drag-and-drop Kanban board for candidate staging.",
      "Designing a clean data architecture to surface urgent tasks (e.g., pending interviews)."
    ],
    uxStrategy: {
      approach: "Focused on a 'glanceable' design philosophy, ensuring that recruiters can understand their daily priorities within 5 seconds of opening the dashboard.",
      steps: [
        { title: "Task Analysis", description: "Broke down the daily routine of a recruiter to identify the most frequently accessed data points." },
        { title: "Wireframing & Layouting", description: "Experimented with various dashboard layouts, ultimately settling on a modular widget system." },
        { title: "Visual Design", description: "Applied a warm, professional color palette (amber/orange) to create an energetic yet focused workspace." }
      ]
    },
    architecture: {
      overview: "Built as a modular dashboard architecture where components can be independently updated and re-arranged.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      codeSnippet: "const KanbanBoard = ({ candidates }) => (\n  <div className=\"flex gap-6 overflow-x-auto\">\n    {['Applied', 'Interview', 'Offered'].map(stage => (\n      <Column key={stage} title={stage}>\n        {candidates.filter(c => c.stage === stage).map(c => (\n          <CandidateCard key={c.id} data={c} />\n        ))}\n      </Column>\n    ))}\n  </div>\n);",
      codeExplanation: "A flexible and horizontal Kanban layout tailored for HR pipelines, allowing easy visual tracking of candidate movement."
    },
    deliverables: ["Dashboard UI Kit", "Interactive Prototype", "Data Visualization Guidelines"],
    outcomes: [
      { metric: "3x", impact: "Faster data retrieval compared to traditional spreadsheet tracking." },
      { metric: "40%", impact: "Reduction in perceived cognitive load during candidate evaluation." }
    ]
  },
  {
    id: "investihub",
    title: "InvestiHub",
    subtitle: "Enterprise Case Management for Insurance Claims Investigation",
    client: "Internal FinTech / InsurTech Suite",
    role: "Senior Product Designer & Frontend Architect",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Case Management", "Enterprise UX", "UI Design", "Workflow Automation"],
    liveUrl: "https://investhub.netlify.app/",
    image: "/portfolio/investihub.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [
      { label: "Case Processing Time", value: "-45%" },
      { label: "SLA Adherence Rate", value: "98.4%" },
      { label: "Investigator Efficiency", value: "+3.2x" }
    ],
    executiveSummary: "A case-management dashboard for tracking insurance claim investigations, assignments, and progress across each review stage.",
    clientContext: "Insurance fraud investigation units previously relied on siloed spreadsheets, email threads, and fragmented document repositories. This disjointed environment slowed down claim verification and increased operational exposure to fraudulent payouts.",
    problemStatement: "Field and desk investigators struggled with scattered evidence trails and lack of clear case prioritization. Bottlenecks occurred across verification stages with no centralized visibility into investigator workloads, leading to missed SLA deadlines and delayed legitimate settlements.",
    keyChallenges: [
      "Structuring dense evidentiary dossiers (PDFs, metadata, photos, forensic reports) into an easily scannable multi-column layout.",
      "Establishing clear audit trails and role-based action gates without introducing bureaucratic friction into urgent reviews.",
      "Designing high-density data tables with multi-parameter filtering, fast status toggles, and real-time SLA countdown tags."
    ],
    uxStrategy: {
      approach: "Implemented an evidence-first information hierarchy with tri-pane navigation: pipeline triage on the left, active dossier inspection in center, and action history/collaboration on the right.",
      steps: [
        {
          title: "Investigator Workflow Mapping",
          description: "Shadowed claims handlers and fraud analysts to identify decision checkpoints and repetitive document switching."
        },
        {
          title: "Information Density Optimization",
          description: "Crafted a compact, high-contrast UI system supporting keyboard shortcuts and instant split-view document previews."
        },
        {
          title: "Status Pipeline & Stage Gating",
          description: "Standardized investigation stages (Intake, Field Audit, Forensic Review, Determination) with automated SLA warnings."
        }
      ]
    },
    architecture: {
      overview: "Developed with React and TypeScript using a state machine pattern to enforce strict case workflow transitions and guarantee optimistic UI updates during rapid batch audits.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
      codeSnippet: "const InvestigationStageBadge = ({ stage, slaRemainingHours }: StageProps) => (\n  <div className=\"flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border bg-slate-50\">\n    <span className=\"font-medium text-xs text-slate-800\">{stage}</span>\n    <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${slaRemainingHours < 24 ? 'bg-rose-100 text-rose-700 font-bold' : 'bg-slate-200 text-slate-600'}`}>\n      {slaRemainingHours}h SLA\n    </span>\n  </div>\n);",
      codeExplanation: "Engineered composable status indicators that prominently flag critical SLA thresholds to prevent regulatory penalties and case neglect."
    },
    deliverables: [
      "Enterprise Case Management Cockpit",
      "Interactive Investigation Stage Flow",
      "Design Token Library for High-Density Data Tables"
    ],
    outcomes: [
      {
        metric: "-45%",
        impact: "Reduction in average turnaround time from claim intake to final investigation sign-off."
      },
      {
        metric: "98.4%",
        impact: "SLA compliance rate achieved across fraud review units within 6 months of rollout."
      }
    ]
  },
  {
    id: "promedia-teknologi",
    title: "Promedia Teknologi",
    subtitle: "Digital Media Ecosystem & Publisher Growth Platform",
    client: "Promedia Teknologi Indonesia",
    role: "Lead UI/UX Designer & Web Consultant",
    timeline: "Selected Work",
    category: "Corporate Website",
    tags: ["Corporate Website", "Information Architecture", "UI/UX", "Responsive Design", "Brand Strategy"],
    image: "/portfolio/promedia-web.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [
      { label: "Partner Onboarding", value: "+120%" },
      { label: "Bounce Rate", value: "-32%" },
      { label: "Publisher Network", value: "1,000+" }
    ],
    executiveSummary: "A corporate website for a digital media and technology ecosystem, structured to clearly communicate its value to publishers, creators, and partners.",
    clientContext: "Promedia Teknologi empowers hundreds of independent digital media portals across Indonesia through integrated CMS, monetization engines, and shared infrastructure. Their corporate presence needed to transition from a generic tech company image to an authoritative digital media powerhouse.",
    problemStatement: "Prospective media partners and regional journalists found it difficult to understand the tangible benefits of joining the Promedia ecosystem. The previous site was text-heavy, lacking narrative flow, clear conversion paths, and interactive proof of partner network scale.",
    keyChallenges: [
      "Communicating a multi-faceted business model (CMS platform, programmatic advertising, content syndication, business incubation) in digestible visual modules.",
      "Balancing corporate authority and credibility for investors with accessible, welcoming onboarding funnels for grassroots media creators.",
      "Ensuring blazing fast performance on mobile devices across varying regional network speeds in Indonesia."
    ],
    uxStrategy: {
      approach: "Designed a narrative-driven journey centered around 'Creator to Media Entrepreneur' empowerment, backed by interactive network counters and clear persona-based entry points.",
      steps: [
        {
          title: "Stakeholder Alignment & Persona Definition",
          description: "Segmented target audiences into regional media owners, freelance journalists, and brand advertisers to tailor specific narrative tracks."
        },
        {
          title: "Information Architecture Restructuring",
          description: "Created a modular storytelling structure: Problem in Digital Media -> The Ecosystem Solution -> Network Social Proof -> Clear Call to Action."
        },
        {
          title: "Visual Identity & Motion Language",
          description: "Infused vibrant brand gradients, sleek modern typography, and refined scroll-triggered animations to demonstrate tech sophistication."
        }
      ]
    },
    architecture: {
      overview: "Constructed with a modern static-first frontend framework optimized for Core Web Vitals, ultra-low asset payload, and fluid micro-animations.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      codeSnippet: "const NetworkMetricCounter = ({ count, label, subtitle }: MetricProps) => (\n  <motion.div whileHover={{ y: -4 }} className=\"p-6 rounded-2xl bg-white border border-purple-100 shadow-sm\">\n    <div className=\"text-4xl font-extrabold text-purple-900 tracking-tight\">{count}</div>\n    <div className=\"text-sm font-bold text-slate-800 mt-1\">{label}</div>\n    <p className=\"text-xs text-slate-500 mt-0.5\">{subtitle}</p>\n  </motion.div>\n);",
      codeExplanation: "Lightweight animated stat cards that highlight network breadth and build instant authority without bogging down client-side performance."
    },
    deliverables: [
      "Corporate Website Architecture & UI System",
      "Mobile-Optimized Partner Registration Funnels",
      "Interactive Network Ecosystem Showcase"
    ],
    outcomes: [
      {
        metric: "+120%",
        impact: "Increase in qualified publisher partnership inquiries submitted via digital forms."
      },
      {
        metric: "-32%",
        impact: "Drop in homepage bounce rate following the rollout of the structured narrative design."
      }
    ]
  },
  {
    id: "media-directory",
    title: "Media Directory",
    subtitle: "High-Precision Search & Filter Engine for Nationwide News Networks",
    client: "Promedia Media Network",
    role: "Product Designer & Frontend Engineer",
    timeline: "Selected Work",
    category: "Platform UX/UI",
    tags: ["Search UX", "Filter System", "Platform Design", "Information Architecture", "Data Discovery"],
    image: "/portfolio/media-direktori.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [
      { label: "Search Discovery Speed", value: "< 200ms" },
      { label: "Filter Usability (SUS)", value: "88/100" },
      { label: "Catalogued Outlets", value: "800+" }
    ],
    executiveSummary: "A searchable media directory that helps users discover media outlets by region, category, and publication needs.",
    clientContext: "With over 800 localized news portals running under a single network, media planners and corporate communications teams struggled to find relevant regional publications for targeted press releases and advertising campaigns.",
    problemStatement: "Discovering specific local media outlets by province, tier, niche category, and readership demographics was a tedious manual process relying on outdated spreadsheets and direct phone inquiries. There was no single source of truth for media discovery.",
    keyChallenges: [
      "Designing a multi-tier facet filter system (Province > Regency > Niche Category > Verification Badge) without cognitive clutter.",
      "Maintaining instantaneous zero-latency search feedback across hundreds of active media entries on mobile screens.",
      "Creating informative media dossier cards that immediately display contact points, regional reach, and editorial niches."
    ],
    uxStrategy: {
      approach: "Developed a faceted filtering workspace inspired by modern e-commerce discovery, featuring persistent filter tags, instantaneous search suggestions, and single-click inquiry triggers.",
      steps: [
        {
          title: "Taxonomy & Metadata Structuring",
          description: "Defined standardized categorization for media tiers, geographic jurisdictions, and editorial verticals."
        },
        {
          title: "Faceted Search UX Design",
          description: "Designed an adaptive sidebar filter with collapsible sections, real-time match counters, and quick-clear badge chips."
        },
        {
          title: "Media Card & Detail Drawer",
          description: "Created quick-preview drawer sheets allowing media buyers to inspect visitor reach, editor contacts, and ratecard indicators without leaving the list view."
        }
      ]
    },
    architecture: {
      overview: "Engineered using client-side memoized filtering and virtualized list views, ensuring instant filter reactions and 60fps scrolling even with complex search criteria.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Fuse.js", "Heroicons"],
      codeSnippet: "const ActiveFilterPills = ({ activeFilters, onRemove, onClearAll }: FilterProps) => (\n  <div className=\"flex flex-wrap items-center gap-2 py-2\">\n    {activeFilters.map(filter => (\n      <button key={filter.id} onClick={() => onRemove(filter.id)} className=\"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors\">\n        <span>{filter.label}</span>\n        <span className=\"text-xs\">&times;</span>\n      </button>\n    ))}\n    {activeFilters.length > 0 && <button onClick={onClearAll} className=\"text-xs text-slate-500 hover:text-slate-800 underline\">Reset All</button>}\n  </div>\n);",
      codeExplanation: "Clear interactive filter tokens that allow users to monitor and dismiss active parameters intuitively."
    },
    deliverables: [
      "Faceted Search & Discovery Platform",
      "Geographic & Niche Taxonomy Framework",
      "Responsive Directory UI Component Library"
    ],
    outcomes: [
      {
        metric: "< 200ms",
        impact: "Search and filter response time achieved using optimized client-side indexing."
      },
      {
        metric: "88/100",
        impact: "System Usability Scale (SUS) score awarded by corporate media planners and PR agency users."
      }
    ]
  },
  {
    id: "dashboard-media-listening",
    title: "Dashboard Media Listening",
    subtitle: "Real-Time Sentiment Analysis & Public Conversation Intelligence",
    client: "Enterprise PR & Brand Monitoring Unit",
    role: "Senior UI/UX & Data Visualization Designer",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Data Visualization", "Social Listening", "Enterprise UX", "Sentiment Analysis"],
    image: "/portfolio/dashboard-media-listening.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-rose-500/10", to: "to-red-500/10", border: "border-rose-200/80", text: "text-rose-700" },
    metrics: [
      { label: "Alert Response Time", value: "< 5 Min" },
      { label: "Crisis Detection", value: "99.2%" },
      { label: "Data Ingestion Speed", value: "50k/hr" }
    ],
    executiveSummary: "A high-frequency media intelligence dashboard engineered for PR and corporate communications teams to track brand sentiment, spot emerging viral crises, and benchmark public discourse across news and social media.",
    clientContext: "Corporate reputation management requires swift intervention. Previously, communication teams relied on end-of-day summary reports, missing critical 1-2 hour windows when negative narratives gain viral momentum on social platforms.",
    problemStatement: "PR managers were inundated with unstructured social noise without actionable sentiment aggregation or automated crisis alerts. Distinguishing bot activity from genuine consumer sentiment took hours of manual parsing.",
    keyChallenges: [
      "Designing intuitive sentiment distribution charts (positive, neutral, negative, sarcastic/ironic) across multi-channel streams.",
      "Creating a low-latency crisis alerting system with visual urgency cues without inducing alert fatigue.",
      "Supporting drill-downs from aggregate national sentiment trends down to individual viral social media posts within 2 clicks."
    ],
    uxStrategy: {
      approach: "Built an alert-driven monitoring hub featuring an executive radar overview, sentiment velocity trackers, and instant quote card drill-downs.",
      steps: [
        {
          title: "Crisis Severity Matrix Design",
          description: "Defined an automated 4-tier alert threshold system (Low, Moderate, High, Critical) based on mention velocity and negative sentiment spike."
        },
        {
          title: "Data Visualization Density Balancing",
          description: "Utilized dual-axis sentiment curves, word-cloud trend shifts, and engagement heatmaps with dark/light mode readability."
        },
        {
          title: "Actionable Incident Workflow",
          description: "Introduced quick-tagging, bookmarking, and 1-click briefing PDF export for executive crisis meetings."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React, Tailwind CSS, and Apache ECharts to render real-time streaming time-series graphs and dynamic topic clusters with hardware-accelerated canvas rendering.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Apache ECharts", "WebSocket"],
      codeSnippet: "const SentimentVelocityIndicator = ({ trend, deltaScore }: SentimentProps) => (\n  <div className=\"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-2xs\">\n    <span className={`w-2.5 h-2.5 rounded-full ${deltaScore < 0 ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`} />\n    <span className=\"text-xs font-bold text-slate-800\">{trend}</span>\n    <span className={`text-[11px] font-mono font-semibold ${deltaScore < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>\n      {deltaScore > 0 ? `+${deltaScore}` : deltaScore}%\n    </span>\n  </div>\n);",
      codeExplanation: "Real-time velocity pills alerting analysts to rapid sentiment surges before issues spiral out of hand."
    },
    deliverables: [
      "Real-Time Listening Command Dashboard",
      "Incident Escalation Workflow Spec",
      "Dynamic Data Visualization Component Library"
    ],
    outcomes: [
      {
        metric: "< 5 Min",
        impact: "Time to identify and escalate brand reputation spikes from social media outbreaks."
      },
      {
        metric: "99.2%",
        impact: "Accuracy rate in flagging potential PR emergencies during major campaign launches."
      }
    ]
  },
  {
    id: "jembatan-tni-photo-video-competition",
    title: "Jembatan TNI — Photo & Video Competition",
    subtitle: "National Creative Competition Platform & Jury Scoring Dashboard",
    client: "TNI & Strategic Media Partner",
    role: "Lead Product Designer & Frontend Developer",
    timeline: "Selected Work",
    category: "Campaign Platform & Admin Dashboard",
    tags: ["Campaign Platform", "Jury Dashboard", "Submission Portal", "Media Management", "Scoring System"],
    liveUrl: "https://jembatanku.netlify.app/",
    image: "/portfolio/jembatanku.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [
      { label: "Total Submissions", value: "3,500+" },
      { label: "Jury Scoring Efficiency", value: "4x Faster" },
      { label: "Upload Success Rate", value: "99.8%" }
    ],
    executiveSummary: "An integrated digital ecosystem comprising a public competition landing page, participant submission flow, and a comprehensive backend jury evaluation & verification dashboard for a nationwide multimedia contest.",
    clientContext: "The national competition expected thousands of high-resolution photo and 4K video submissions from military personnel and the general public across Indonesia. The organizers needed both an inspiring public-facing portal and an enterprise dashboard for administrative verification and multi-judge scoring.",
    problemStatement: "Previous competitions suffered from file upload failures, missing participant metadata, and chaotic manual spreadsheet scoring by judging panels. Organizers lacked a unified pipeline to disqualify invalid entries, assign judges blind evaluations, and tabulate final rankings in real-time.",
    keyChallenges: [
      "Designing a high-bandwidth upload flow capable of handling raw photographic files and heavy video assets with chunked progress feedback.",
      "Building a dedicated Jury & Admin Dashboard with blind scoring controls, weighted rubrics (composition, storytelling, technique), and anti-bias mechanisms.",
      "Creating a public competition landing page that exudes military honor, patriotic pride, and creative prestige."
    ],
    uxStrategy: {
      approach: "Developed a dual-sided product strategy: a motivational, frictionless public portal for creators, paired with a specialized high-speed jury assessment cockpit with keyboard hotkeys for rapid photo review.",
      steps: [
        {
          title: "Public Submission Flow Optimization",
          description: "Engineered a 3-step submission modal with automated EXIF metadata extraction, client-side thumbnail generation, and instant validation."
        },
        {
          title: "Jury Evaluation Cockpit Design",
          description: "Created a distraction-free scoring UI featuring high-res lightbox inspection, EXIF camera data sidebar, and slider-based rubric scoring."
        },
        {
          title: "Admin Triage & Audit Dashboard",
          description: "Implemented batch verification, copyright plagiarism checks, and automatic score tallying with live leaderboard recalculation."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React, TypeScript, and Tailwind CSS. Integrated client-side image compression, chunked file upload handlers, and an admin jury portal with instant cache-assisted photo rendering.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "Framer Motion"],
      codeSnippet: "const JuryScoringCard = ({ submission, onScoreSubmit }: JuryScoringProps) => (\n  <div className=\"bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white\">\n    <div className=\"flex justify-between items-center mb-4\">\n      <span className=\"font-mono text-xs text-teal-400\">ENTRY #{submission.code}</span>\n      <span className=\"text-xs text-slate-400\">{submission.category}</span>\n    </div>\n    <div className=\"space-y-4\">\n      <RubricSlider label=\"Composition & Framing (30%)\" max={100} />\n      <RubricSlider label=\"Storytelling & Emotional Resonance (40%)\" max={100} />\n      <RubricSlider label=\"Technical Mastery & Lighting (30%)\" max={100} />\n    </div>\n  </div>\n);",
      codeExplanation: "Modular scoring component for judges supporting weighted criteria, auto-save drafts, and swift keyboard navigation between photo entries."
    },
    deliverables: [
      "Public Competition Landing Page & Submission Flow",
      "Comprehensive Jury Scoring Dashboard & Lightbox Reviewer",
      "Admin Verification & Leaderboard Tabulation Portal"
    ],
    outcomes: [
      {
        metric: "3,500+",
        impact: "Verified creative photo and video entries successfully processed without server timeouts."
      },
      {
        metric: "4x Faster",
        impact: "Accelerated judging phase through standardized digital scoring rubrics and batch review tools."
      }
    ]
  },
  {
    id: "mofish",
    title: "Mofish",
    subtitle: "Real-Time Mobile-First Live Bidding Experience for Rare Koi Fish",
    client: "Mofish Marketplace",
    role: "Lead Product Designer & Mobile UX Specialist",
    timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["PWA", "Mobile UX", "Auction Platform", "Product Design", "Live Bidding"],
    image: "/portfolio/mofish auction.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [
      { label: "Bid Placement Latency", value: "< 150ms" },
      { label: "Auction GMV Growth", value: "+85%" },
      { label: "Last-Minute Bidding Retention", value: "94%" }
    ],
    executiveSummary: "A mobile-first auction experience for koi fish, designed around product imagery, lot information, and a clear bidding flow.",
    clientContext: "Ornamental koi auctions traditionally happened in messy messaging groups or physical farm visits. Collectors faced disputes over bid timestamps, lack of high-res video proof of fish swimming patterns, and unclear closing countdown rules.",
    problemStatement: "High-value fish transactions require deep trust and instant decision-making. Existing auction tools lacked fluid mobile optimization, clear certificate authentication display, and real-time outbid notifications, leading to buyer hesitation and lost farm revenue.",
    keyChallenges: [
      "Presenting high-resolution swimming video loops, lineage certificates, and size measurements within a thumb-friendly mobile layout.",
      "Designing an exhilarating yet foolproof live bidding interface that prevents accidental bids while enabling sub-second bid placement.",
      "Managing countdown snipe extensions (anti-sniping rules) clearly so bidders don't feel cheated at the closing second."
    ],
    uxStrategy: {
      approach: "Created an immersive, tactile live auction sheet featuring 60fps micro-animations, quick bid presets (+100k, +250k, +500k), and haptic-style visual confirmations.",
      steps: [
        {
          title: "Collector Trust Architecture",
          description: "Placed breeder lineage badges, official certification scans, and health guarantees directly alongside the hero video gallery."
        },
        {
          title: "High-Stakes Bidding Interaction",
          description: "Engineered a persistent bottom bidding drawer with tap-and-hold confirmation to avoid misclicks while maintaining split-second competitive urgency."
        },
        {
          title: "Live Outbid & Snipe Protection System",
          description: "Implemented an unmistakable visual flash notification and countdown extension timer when bids arrive in the final 60 seconds."
        }
      ]
    },
    architecture: {
      overview: "Constructed as an ultra-fast Progressive Web App (PWA) with WebSocket real-time bid sync, optimistic state rendering, and lightweight video stream caching.",
      stack: ["React", "TypeScript", "Tailwind CSS", "WebSocket", "Framer Motion"],
      codeSnippet: "const QuickBidDrawer = ({ currentHighestBid, onPlaceBid, minIncrement }: BidProps) => (\n  <div className=\"fixed bottom-0 inset-x-0 p-4 bg-slate-900/95 backdrop-blur-md rounded-t-3xl border-t border-slate-800\">\n    <div className=\"flex justify-between items-center mb-3\">\n      <span className=\"text-xs text-slate-400\">Current Bid</span>\n      <span className=\"text-xl font-black text-amber-400 font-mono\">Rp {currentHighestBid.toLocaleString()}</span>\n    </div>\n    <div className=\"grid grid-cols-3 gap-2\">\n      {[minIncrement, minIncrement * 2, minIncrement * 5].map(inc => (\n        <button key={inc} onClick={() => onPlaceBid(currentHighestBid + inc)} className=\"py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs\">\n          +{inc / 1000}K\n        </button>\n      ))}\n    </div>\n  </div>\n);",
      codeExplanation: "One-tap increment buttons tailored for fast-paced auction final stretch, keeping bidders engaged without typing errors."
    },
    deliverables: [
      "Mobile-First PWA Auction Interface",
      "Real-Time Bidding Drawer & Anti-Snipe Flow",
      "Fish Lot Pedigree & Verification Specification"
    ],
    outcomes: [
      {
        metric: "< 150ms",
        impact: "Real-time bid synchronization delay, eliminating dispute over timestamp priority."
      },
      {
        metric: "+85%",
        impact: "Increase in gross merchandise value (GMV) for partner koi breeders during weekly auctions."
      }
    ]
  },
  {
    id: "sales-motor-website",
    title: "Sales Motor Website",
    subtitle: "High-Conversion Lead Generation & WhatsApp Sales Funnel for Authorized Dealerships",
    client: "Yamaha Authorized Dealer Network",
    role: "Lead Conversion UI/UX Designer & Web Developer",
    timeline: "Selected Work",
    category: "Lead Generation",
    tags: ["Landing Page", "Lead Generation", "Automotive", "Conversion UX", "WhatsApp Funnel"],
    liveUrl: "https://motorbaruyamaha.netlify.app/",
    image: "/portfolio/website-sales-motor.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [
      { label: "Inquiry Conversion Rate", value: "+42%" },
      { label: "Time-to-WhatsApp Contact", value: "< 25 Sec" },
      { label: "Down Payment Simulation Leads", value: "+68%" }
    ],
    executiveSummary: "A Yamaha motorcycle promotional website designed to turn interest into direct WhatsApp conversations through a focused, low-friction journey.",
    clientContext: "Motorcycle salespeople rely heavily on direct WhatsApp chats to close sales. However, generic dealer websites often burden visitors with complicated forms or outdated PDF brochures, resulting in lost customer intent.",
    problemStatement: "Prospective motorcycle buyers want to know three things immediately: down payment (DP) options, monthly installments, and currently available promos. Traditional web pages hid this behind long contact forms, driving buyers away.",
    keyChallenges: [
      "Designing an intuitive, responsive credit simulation slider that dynamically estimates monthly installments without intimidating first-time buyers.",
      "Crafting contextual floating WhatsApp Call-to-Actions (CTAs) that pre-fill motorcycle model name and selected DP into the chat draft.",
      "Optimizing asset sizes for lightning-fast loading on entry-level Android devices and 4G mobile networks."
    ],
    uxStrategy: {
      approach: "Engineered a low-friction, micro-conversion pathway with real-time installment estimation, clear vehicle color pickers, and pre-populated WhatsApp message triggers.",
      steps: [
        {
          title: "Frictionless Credit Simulation UX",
          description: "Created an interactive DP & tenor calculator slider with instantaneous estimates and transparent leasing partner options."
        },
        {
          title: "Pre-Configured Chat Dispatch",
          description: "Programmed dynamic WhatsApp deep links that pass the exact motorcycle variant, color, and DP preferences directly to the salesperson's chat window."
        },
        {
          title: "Urgency & Promo Highlighting",
          description: "Strategically positioned limited-time dealer bonuses, cashbacks, and delivery guarantees near primary conversion points."
        }
      ]
    },
    architecture: {
      overview: "Constructed with lightweight Vanilla/React architecture ensuring sub-1s First Contentful Paint (FCP) on mobile devices, with dynamic deep-link generation.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"],
      codeSnippet: "const buildWhatsAppInquiryUrl = (phone: string, bikeModel: string, dp: string, tenor: string) => {\n  const message = `Halo Sales Yamaha, saya tertarik dengan unit *${bikeModel}*. Boleh info promo DP ${dp} dengan tenor ${tenor} bulan?`;\n  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;\n};",
      codeExplanation: "Context-preserving URL builder creating formatted, intent-rich opening messages that help sales reps respond accurately and close faster."
    },
    deliverables: [
      "High-Conversion Automotive Landing Page",
      "Interactive DP & Installment Calculator Component",
      "Direct WhatsApp Chat Routing Framework"
    ],
    outcomes: [
      {
        metric: "+42%",
        impact: "Increase in qualified sales inquiries compared to standard dealer catalog pages."
      },
      {
        metric: "< 25 Sec",
        impact: "Average time for a new visitor to calculate an installment and initiate a sales consultation."
      }
    ]
  },
  {
    id: "ottoban-indonesia",
    title: "Ottoban Indonesia",
    subtitle: "Interactive Tyre & Alloy Wheel Finder with Vehicle Fitment Matching",
    client: "Ottoban Indonesia Automotive Network",
    role: "Lead UI/UX & E-commerce Product Designer",
    timeline: "Selected Work",
    category: "E-commerce UX/UI",
    tags: ["E-commerce", "Product Finder", "Automotive", "UX/UI", "Fitment Engine"],
    liveUrl: "https://ottoban.netlify.app/",
    image: "/portfolio/ottoban.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [
      { label: "Fitment Matching Accuracy", value: "99.4%" },
      { label: "Catalog Checkout Conversion", value: "+38%" },
      { label: "Product Return Rate", value: "-62%" }
    ],
    executiveSummary: "A tyre and wheel finder that simplifies technical vehicle specifications into a more intuitive product-selection journey.",
    clientContext: "Choosing wheels and tyres is daunting for typical car owners due to intricate technical specs like PCD, offset, rim diameter, and tyre aspect ratios. Ottoban needed a seamless digital finder to guide drivers based purely on their car model.",
    problemStatement: "Customers often purchased incorrect tyre or rim dimensions online, resulting in high return rates, friction at retail workshops, and overloaded customer support channels.",
    keyChallenges: [
      "Translating complex wheel offset (ET) and PCD fitment calculations into a simple 3-click car selector (Brand > Model > Year).",
      "Displaying real-time workshop inventory and nearest installation branch availability alongside online checkout.",
      "Creating realistic 2D visual previews of alloy wheels mounted onto the user's specific car color."
    ],
    uxStrategy: {
      approach: "Developed a guided 'Vehicle-First' selector funnel that filters out incompatible stock before showing catalog results, backed by clear spec explainers and workshop booking.",
      steps: [
        {
          title: "Fitment Engine Architecture",
          description: "Standardized fitment databases across 150+ car models in Indonesia, ensuring zero mismatch risk."
        },
        {
          title: "Visual Comparison Workspace",
          description: "Designed side-by-side wheel finish and tyre tread comparison cards with acoustic and grip ratings."
        },
        {
          title: "Omnichannel Workshop Booking",
          description: "Integrated an in-store appointment step directly into the digital purchasing journey."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React, TypeScript, and Tailwind CSS with client-side memoized fitment filters and responsive drawer navigation.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Headless UI", "Lucide React"],
      codeSnippet: "const VehicleFitmentSelector = ({ carModel, onSelectSize }: FitmentProps) => (\n  <div className=\"p-4 rounded-2xl bg-white border border-cyan-100 shadow-sm\">\n    <span className=\"text-xs font-semibold text-cyan-800 uppercase tracking-wide\">Fitment Guaranteed</span>\n    <h4 className=\"text-sm font-bold text-slate-800 mt-1\">{carModel.brand} {carModel.name}</h4>\n    <div className=\"flex gap-2 mt-3\">\n      {carModel.supportedRimSizes.map(size => (\n        <button key={size} onClick={() => onSelectSize(size)} className=\"px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-200 hover:bg-cyan-50\">\n          R{size}\n        </button>\n      ))}\n    </div>\n  </div>\n);",
      codeExplanation: "Guaranteed fitment token ensuring drivers only view rims compatible with their car's bolt pattern and wheel arch clearance."
    },
    deliverables: [
      "Vehicle Fitment Finder Engine",
      "Interactive Wheel & Tyre Catalog",
      "Workshop Installation Booking Flow"
    ],
    outcomes: [
      {
        metric: "99.4%",
        impact: "Accuracy rate in vehicle tyre & wheel dimension matching across digital orders."
      },
      {
        metric: "-62%",
        impact: "Drastic drop in customer product return requests due to incompatible fitments."
      }
    ]
  },
  {
    id: "dashboard-monitoring-bank-socmed",
    title: "Dashboard Monitoring — Bank Socmed",
    subtitle: "Omnichannel Social & News Intelligence for Banking & Financial Services",
    client: "Leading National Bank (Strategic Intelligence Unit)",
    role: "Senior Enterprise Dashboard & UX Designer",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Social Intelligence", "Data Visualization", "Enterprise UX", "Banking & FinTech"],
    liveUrl: "https://hub-strategic-46.netlify.app/",
    image: "/portfolio/dashboard-bank.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [
      { label: "Financial Phishing Detection", value: "< 10 Min" },
      { label: "Brand Sentiment Index", value: "+18 pts" },
      { label: "Multi-Source Feeds", value: "12 Channels" }
    ],
    executiveSummary: "A strategic monitoring dashboard combining social, online, and print signals to help teams identify alerts and response priorities.",
    clientContext: "Banking institutions face intense operational risks from customer service flare-ups, mobile banking outages, and fraudulent account impersonations spreading rapidly across Twitter/X, Instagram, and news sites.",
    problemStatement: "Customer care, public relations, and legal compliance teams worked with separate dashboards, unable to correlate sudden transaction complaints with viral social discussions in time to issue proactive advisories.",
    keyChallenges: [
      "Synthesizing cross-channel data (social media, national news, financial forums, app store reviews) into a unified risk heatmap.",
      "Distinguishing between normal transaction inquiries and high-risk security/fraud keywords requiring immediate escalation.",
      "Designing high-density data views compliant with enterprise security standards and executive presentation modes."
    ],
    uxStrategy: {
      approach: "Created an omnichannel crisis-triage matrix with categorized stream widgets, automated keyword spike alerts, and pre-approved customer communication playbooks.",
      steps: [
        {
          title: "Banking Threat Taxonomy",
          description: "Categorized stream tags into Service Disruption, ATM/App Glitch, Fraud/Phishing, and Brand Reputation."
        },
        {
          title: "Cross-Department Collaboration View",
          description: "Built ticket assignment and handover workflows between PR and Customer Care teams directly inside the dashboard."
        },
        {
          title: "Executive Situational Room UI",
          description: "Designed a dark-mode projection view summarizing live sentiment index, trending banking issues, and response SLA."
        }
      ]
    },
    architecture: {
      overview: "Engineered using React, TypeScript, and Tailwind CSS with real-time stream simulation and responsive modular grid layouts.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
      codeSnippet: "const ThreatSpikeAlert = ({ category, mentionVolume, riskLevel }: ThreatProps) => (\n  <div className=\"flex items-center justify-between p-3.5 rounded-xl border border-purple-100 bg-purple-50/50\">\n    <div className=\"flex items-center gap-2.5\">\n      <span className={`w-2 h-2 rounded-full ${riskLevel === 'CRITICAL' ? 'bg-red-500 animate-ping' : 'bg-purple-600'}`} />\n      <span className=\"text-xs font-bold text-slate-800\">{category}</span>\n    </div>\n    <span className=\"text-xs font-mono font-bold text-purple-700\">+{mentionVolume}/min</span>\n  </div>\n);",
      codeExplanation: "Contextual alert widget alerting bank security and communications officers to unusual mention volume spikes."
    },
    deliverables: [
      "Omnichannel Banking Intelligence Command Center",
      "Crisis Protocol & Incident Handover Flow",
      "Data Density UI Component Framework"
    ],
    outcomes: [
      {
        metric: "< 10 Min",
        impact: "Average response time to flag fake banking customer care accounts and phishing schemes."
      },
      {
        metric: "+18 pts",
        impact: "Net Brand Sentiment improvement due to proactive communication during scheduled system maintenance."
      }
    ]
  },
  {
    id: "landing-page-gadai-bpkb",
    title: "Landing Page Gadai BPKB",
    subtitle: "Transparent Vehicle Pawn Financing with Real-Time Loan Calculator",
    client: "Licensed Multi-Finance Partner",
    role: "Conversion Rate Optimization (CRO) & UI/UX Designer",
    timeline: "Selected Work",
    category: "Lead Generation",
    tags: ["Landing Page", "Financial Services", "Conversion UX", "Responsive Design", "FinTech"],
    liveUrl: "https://danabpkb.netlify.app/",
    image: "/portfolio/dana-bpkb.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [
      { label: "Lead Conversion Rate", value: "24.6%" },
      { label: "Cost Per Acquisition", value: "-35%" },
      { label: "Submission Drop-Off", value: "-48%" }
    ],
    executiveSummary: "A financing service landing page that makes key information, simulation, and consultation paths easier to understand.",
    clientContext: "Vehicle logbook loans (Gadai BPKB) are essential liquidity options for Indonesian MSMEs and families. However, the market is filled with predatory lenders, leading to high consumer distrust and hesitation.",
    problemStatement: "Traditional financing landing pages hid interest rates, disbursement deductions, and licensing accreditation, creating anxiety. Users dropped out when forced to fill out long personal identity forms before seeing estimates.",
    keyChallenges: [
      "Overcoming consumer skepticism by prominently showcasing OJK licensing, verified physical branches, and honest fee breakdowns.",
      "Building an ultra-intuitive loan simulation slider that updates disburseable cash and monthly installments in real time.",
      "Ensuring zero friction on mobile connections for users seeking emergency cash within minutes."
    ],
    uxStrategy: {
      approach: "Applied a 'Transparency-First' design strategy: instant loan estimate -> clear accreditation badges -> low-commitment 2-field inquiry form -> immediate WhatsApp verification.",
      steps: [
        {
          title: "Heuristic Evaluation & Trust Signals",
          description: "Positioned OJK registration badges, customer testimonials, and zero-hidden-fee guarantees above the fold."
        },
        {
          title: "Progressive Loan Calculator",
          description: "Allowed visitors to choose vehicle type (Motorcycle vs. Car), manufacture year, and loan duration to see realistic fund estimates instantly."
        },
        {
          title: "Shortened Lead Capture",
          description: "Reduced the required initial form fields to just Vehicle Type, City, and WhatsApp number."
        }
      ]
    },
    architecture: {
      overview: "Built with React, Vite, and Tailwind CSS, leveraging micro-interactions and instant validation to provide a reassurance-heavy experience.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
      codeSnippet: "const LoanSimulationResult = ({ estimatedCash, monthlyInstallment, tenorMonths }: LoanProps) => (\n  <div className=\"bg-emerald-900 text-white p-6 rounded-2xl shadow-lg\">\n    <p className=\"text-xs text-emerald-300 uppercase tracking-wider font-semibold\">Estimasi Dana Cair</p>\n    <h3 className=\"text-3xl font-black text-emerald-400 mt-1 font-mono\">Rp {estimatedCash.toLocaleString()}</h3>\n    <div className=\"mt-4 pt-4 border-t border-emerald-800 flex justify-between text-xs\">\n      <span className=\"text-emerald-200\">Cicilan per bulan ({tenorMonths} bln):</span>\n      <span className=\"font-bold font-mono text-white\">Rp {monthlyInstallment.toLocaleString()}</span>\n    </div>\n  </div>\n);",
      codeExplanation: "High-contrast payout card showing exact liquid cash expectations before asking for user contact info."
    },
    deliverables: [
      "High-Trust Financial Lead Generation Landing Page",
      "Interactive Vehicle Loan Calculator",
      "OJK Compliance & Trust System Layout"
    ],
    outcomes: [
      {
        metric: "24.6%",
        impact: "Visitor-to-lead conversion rate achieved across paid search and social campaigns."
      },
      {
        metric: "-35%",
        impact: "Reduction in Customer Acquisition Cost (CAC) compared to previous campaign assets."
      }
    ]
  },
  {
    id: "asian-music-games",
    title: "Asian Music Games",
    subtitle: "Regional Esports & Rhythm Gaming Tournament Festival Portal",
    client: "Asian Music Games Organizing Committee",
    role: "Lead UI/UX & Web Interaction Designer",
    timeline: "Selected Work",
    category: "Event Website",
    tags: ["Event Website", "Landing Page", "UI/UX", "Responsive Design", "Gaming & Esports"],
    liveUrl: "https://asianmusicgames.netlify.app/",
    image: "/portfolio/asianmusicgames.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-rose-500/10", to: "to-red-500/10", border: "border-rose-200/80", text: "text-rose-700" },
    metrics: [
      { label: "Tournament Registrations", value: "2,400+" },
      { label: "Participant Satisfaction", value: "96%" },
      { label: "Average Session Duration", value: "3m 45s" }
    ],
    executiveSummary: "A regional event portal with an energetic visual direction and clear paths to event information and registration.",
    clientContext: "The Asian Music Games is a premier regional gaming festival attracting competitive rhythm game players and anime music enthusiasts across Southeast Asia. The digital presence needed to match the high-octane energy of the esports rhythm genre.",
    problemStatement: "Previous event pages felt static and disconnected from gaming culture. Competitors struggled to find game category rules, stage timetables, and regional qualifier bracket details.",
    keyChallenges: [
      "Creating a futuristic cyberpunk/rhythm-game aesthetic with neon accents while preserving clean readability and accessibility.",
      "Organizing complex tournament brackets, multi-stage rulebooks, and international participant registration forms.",
      "Delivering heavy festival visual appeal without sacrificing mobile performance and page speed."
    ],
    uxStrategy: {
      approach: "Engineered an energetic festival hub with neon glassmorphic aesthetics, interactive schedule timetables, and categorized registration pathways for solo and team entrants.",
      steps: [
        {
          title: "Gamer-Centric Aesthetic Direction",
          description: "Infused neon magenta/cyan accents, dynamic typography, and soundwave motifs inspired by Japanese arcade games."
        },
        {
          title: "Interactive Schedule & Bracket View",
          description: "Created an interactive timetable allowing attendees to filter by tournament game title, day, and main stage."
        },
        {
          title: "Multi-Language Registration Funnel",
          description: "Designed an international registration flow supporting multiple regional payment gateways and Discord integration."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React, Tailwind CSS, and Framer Motion with hardware-accelerated animations and responsive CSS grid tournament schedules.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      codeSnippet: "const TournamentCategoryBadge = ({ title, platform, prizePool }: CategoryProps) => (\n  <motion.div whileHover={{ scale: 1.02 }} className=\"p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-rose-950/40 border border-rose-500/30 shadow-md\">\n    <div className=\"flex justify-between items-start\">\n      <span className=\"px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-mono text-[10px] uppercase\">{platform}</span>\n      <span className=\"text-xs font-bold text-amber-400 font-mono\">Prize: {prizePool}</span>\n    </div>\n    <h3 className=\"text-lg font-black text-white mt-3\">{title}</h3>\n  </motion.div>\n);",
      codeExplanation: "High-energy category card showcasing tournament titles and prize pools with smooth hover physics."
    },
    deliverables: [
      "Festival Landing Page & Portal",
      "Interactive Bracket & Timetable System",
      "Esports Registration & Ticket Integration"
    ],
    outcomes: [
      {
        metric: "2,400+",
        impact: "Registered international participants from 8 Asian countries within 3 weeks."
      },
      {
        metric: "96%",
        impact: "Positive attendee survey feedback regarding schedule accessibility and registration ease."
      }
    ]
  },
  {
    id: "yamaha-warrior",
    title: "Yamaha Warrior",
    subtitle: "Gamified Rider Community Platform, Activity Challenges & Rewards",
    client: "Yamaha Motor Community Division",
    role: "Lead Product Designer & Gamification UX Specialist",
    timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["PWA", "Community Platform", "Gamification", "Mobile UX", "Automotive"],
    liveUrl: "https://y-warior.netlify.app/",
    image: "/portfolio/y-warrior.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [
      { label: "Daily Active Riders", value: "14,500+" },
      { label: "Challenge Completion Rate", value: "78%" },
      { label: "Community Retention (Day 30)", value: "64%" }
    ],
    executiveSummary: "A mobile-first challenge platform where users can follow activities, share moments, track rewards, and view the leaderboard.",
    clientContext: "Yamaha motorcycle owners have strong community pride and passion for touring. The brand sought to transform passive vehicle ownership into an active, gamified digital lifestyle community.",
    problemStatement: "Motorcycle clubs previously organized rides via fragmented chat groups without persistent tracking, verifiable milestone badges, or structured rewards from official Yamaha dealerships.",
    keyChallenges: [
      "Designing engaging daily and weekend touring challenges that encourage safe riding without incentivizing reckless speeding.",
      "Creating a motivating reward economy (XP points redeemable for official merchandise, service discounts, and oil changes).",
      "Building an intuitive, low-latency mobile community feed where riders can share photos of scenic check-in waypoints."
    ],
    uxStrategy: {
      approach: "Constructed a badge-and-tier gamification system built around milestone check-ins, regional touring quests, and rider reputation tiers.",
      steps: [
        {
          title: "Gamification Mechanics Design",
          description: "Formulated XP, badge, and leaderboard mechanics focused on distance, safe riding habits, and community check-ins."
        },
        {
          title: "Mobile-First Waypoint Check-In",
          description: "Designed a 2-tap photo check-in flow with location verification and offline queueing for remote mountain routes."
        },
        {
          title: "Dealer Rewards Integration",
          description: "Built an in-app reward wallet generating dynamic QR vouchers usable at authorized Yamaha workshops."
        }
      ]
    },
    architecture: {
      overview: "Engineered as a Progressive Web App (PWA) with client-side caching, biometric-ready local storage, and lightweight social feed rendering.",
      stack: ["React", "TypeScript", "Tailwind CSS", "PWA", "Framer Motion"],
      codeSnippet: "const RiderQuestCard = ({ questTitle, currentXp, targetXp, rewardBadge }: QuestProps) => (\n  <div className=\"p-4 rounded-2xl bg-white border border-teal-100 shadow-sm\">\n    <div className=\"flex justify-between items-center mb-2\">\n      <span className=\"text-xs font-bold text-slate-800\">{questTitle}</span>\n      <span className=\"text-xs font-mono font-extrabold text-teal-700\">+{rewardBadge}</span>\n    </div>\n    <div className=\"w-full h-2 rounded-full bg-slate-100 overflow-hidden\">\n      <div className=\"h-full bg-gradient-to-r from-teal-500 to-emerald-500\" style={{ width: `${(currentXp / targetXp) * 100}%` }} />\n    </div>\n  </div>\n);",
      codeExplanation: "Compact progress bar card inspiring community members to complete ongoing weekend touring quests."
    },
    deliverables: [
      "PWA Community Application",
      "Rider Gamification & Milestone Badging System",
      "Dealer Voucher & Reward Wallet Interface"
    ],
    outcomes: [
      {
        metric: "14,500+",
        impact: "Daily active motorcycle enthusiasts engaging in touring quests and check-in feeds."
      },
      {
        metric: "78%",
        impact: "Completion rate on official brand weekend touring challenges."
      }
    ]
  },
  {
    id: "the-botanica-signature",
    title: "The Botanica Signature",
    subtitle: "Luxury Resort-Style Residence Landing Page & VIP Private Viewing Booking",
    client: "The Botanica Signature Bogor",
    role: "Lead UI/UX Designer & Digital Brand Strategist",
    timeline: "Selected Work",
    category: "Property Landing Page",
    tags: ["Property Website", "Landing Page", "UI/UX", "Premium Brand", "Luxury Real Estate"],
    liveUrl: "https://thebotanicasignaturebogor.com/",
    image: "/portfolio/thebotanicalsignature.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [
      { label: "High-Net-Worth Lead Rate", value: "+54%" },
      { label: "Show Unit Private Visits", value: "320+" },
      { label: "Average Time on Page", value: "4m 12s" }
    ],
    executiveSummary: "A premium property landing page that uses restrained navigation and strong visual storytelling to support high-intent inquiries.",
    clientContext: "The Botanica Signature is a high-end botanical sanctuary villa development in Bogor catering to affluent executives and retirees. The digital presence required supreme elegance, tranquility, and exclusivity.",
    problemStatement: "Generic real estate websites overwhelm buyers with loud discount banners and pushy sales prompts, which dilutes luxury perception and deters high-net-worth buyers.",
    keyChallenges: [
      "Establishing an ultra-luxury editorial aesthetic (editorial typography, muted earth tones, generous negative space).",
      "Presenting architectural floor plans, panoramic landscape views, and bespoke interior materials without overwhelming mobile screens.",
      "Designing an exclusive, discreet 'Private Appointment' booking flow that feels like a concierge service rather than a marketing form.",
    ],
    uxStrategy: {
      approach: "Adopted an architectural storytelling rhythm: Natural Sanctuary Environment -> Architectural Philosophy -> Floor Plan Details -> Private Concierge Inquiry.",
      steps: [
        {
          title: "Editorial Visual Philosophy",
          description: "Paired sophisticated serif headlines with serene botanical photography, subtle parallax, and warm organic palettes."
        },
        {
          title: "Interactive Masterplan & Unit Explorer",
          description: "Created an interactive zoning map highlighting villa positioning, private gardens, and clubhouse proximity."
        },
        {
          title: "VIP Concierge Booking Touchpoint",
          description: "Designed an understated consultation booking modal offering personalized private show-unit tours with champagne reception."
        }
      ]
    },
    architecture: {
      overview: "Constructed with modern responsive frontend tooling, optimized lazy-loaded photography, and smooth scroll animations.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis Scroll"],
      codeSnippet: "const FloorplanSpecSheet = ({ unitType, landArea, buildingArea, bedrooms }: VillaProps) => (\n  <div className=\"border border-slate-200 p-8 rounded-3xl bg-white/80 backdrop-blur-sm\">\n    <span className=\"text-xs tracking-widest text-slate-400 uppercase font-sans\">Exclusive Collection</span>\n    <h3 className=\"text-2xl font-serif text-slate-900 mt-1\">{unitType}</h3>\n    <div className=\"grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-slate-100 text-xs\">\n      <div><span className=\"text-slate-400 block\">Land</span><strong className=\"text-slate-800 text-sm font-sans\">{landArea} m²</strong></div>\n      <div><span className=\"text-slate-400 block\">Building</span><strong className=\"text-slate-800 text-sm font-sans\">{buildingArea} m²</strong></div>\n      <div><span className=\"text-slate-400 block\">Bedrooms</span><strong className=\"text-slate-800 text-sm font-sans\">{bedrooms} En-Suite</strong></div>\n    </div>\n  </div>\n);",
      codeExplanation: "Understated luxury architectural spec card conveying craftsmanship and spatial dimensions clearly."
    },
    deliverables: [
      "Luxury Real Estate Landing Experience",
      "Interactive Masterplan & Villa Catalog",
      "VIP Concierge Reservation Flow"
    ],
    outcomes: [
      {
        metric: "+54%",
        impact: "Increase in verified high-intent private consultation inquiries from affluent buyers."
      },
      {
        metric: "320+",
        impact: "Exclusive on-site private viewing tours scheduled via the digital platform."
      }
    ]
  },
  {
    id: "yayasan-terapi-indonesia-sehat",
    title: "Yayasan Terapi Indonesia Sehat",
    subtitle: "Holistic Health Clinic, Therapy Services & Home Visit Care Booking",
    client: "Yayasan Terapi Indonesia Sehat (Kang Irwan)",
    role: "Lead UI/UX Designer & Web Developer",
    timeline: "Selected Work",
    category: "Service Website",
    tags: ["Service Website", "Healthcare UX", "Responsive Design", "UI/UX", "Booking System"],
    liveUrl: "http://kangirwantherapispijat.com/",
    image: "/portfolio/kangirwantherapist.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [
      { label: "Monthly Session Bookings", value: "+75%" },
      { label: "Client Reassurance Score", value: "95%" },
      { label: "WhatsApp Direct Consultations", value: "350+/mo" }
    ],
    executiveSummary: "A service website for therapy and home care, designed to make services, credibility, and booking access feel clear and reassuring.",
    clientContext: "Alternative health therapy, neuromuscular rehabilitation, and home care services require high levels of trust and empathy, especially when patients are dealing with chronic pain, stroke recovery, or post-accident mobility issues.",
    problemStatement: "Patients and their families had difficulty finding clear descriptions of specific therapy treatments, practitioner credentials, and home visit availability, leading to repeated manual inquiries and booking delays.",
    keyChallenges: [
      "Communicating clinical credibility, practitioner certifications, and hygiene/safety standards reassuringly to anxious patients.",
      "Simplifying the appointment booking flow for elderly users and families seeking urgent home care visits.",
      "Structuring treatment packages (stroke recovery, spine therapy, nerve rehabilitation) with clear duration and pricing transparency."
    ],
    uxStrategy: {
      approach: "Developed a patient-first healthcare experience with clear symptom-to-treatment mappings, verified patient testimonials, and direct 1-tap WhatsApp consultation scheduling.",
      steps: [
        {
          title: "Empathy & Reassurance Mapping",
          description: "Organized content around patient conditions (e.g., Saraf Kejepit, Pemulihan Stroke, Nyeri Otot) so visitors immediately find relevant care."
        },
        {
          title: "Practitioner Credibility Showcase",
          description: "Prominently displayed formal certifications, years of experience, and honest video testimonials."
        },
        {
          title: "Direct Home-Care Scheduling",
          description: "Created a simple booking funnel allowing families to request on-site home visits with location-aware routing."
        }
      ]
    },
    architecture: {
      overview: "Constructed with clean semantic HTML, Tailwind CSS, and lightweight JavaScript ensuring rapid load times even on slow 3G cellular connections.",
      stack: ["HTML5", "JavaScript", "Tailwind CSS", "Responsive Design"],
      codeSnippet: "const TherapyServiceCard = ({ title, targetSymptom, duration, onBook }: TherapyProps) => (\n  <div className=\"p-6 rounded-2xl bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow\">\n    <span className=\"text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full\">{targetSymptom}</span>\n    <h3 className=\"text-lg font-bold text-slate-800 mt-3\">{title}</h3>\n    <p className=\"text-xs text-slate-500 mt-1\">Durasi: {duration} | Tersedia Layanan Home Visit</p>\n    <button onClick={onBook} className=\"mt-4 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs\">\n      Jadwalkan Konsultasi\n    </button>\n  </div>\n);",
      codeExplanation: "Accessible therapy service card connecting patients directly with condition-specific consultations."
    },
    deliverables: [
      "Healthcare Service & Therapy Website",
      "Symptom-to-Treatment Navigator",
      "Home Visit Booking & WhatsApp Consultation Gateway"
    ],
    outcomes: [
      {
        metric: "+75%",
        impact: "Increase in confirmed therapy session appointments across clinic and home visit services."
      },
      {
        metric: "95%",
        impact: "Reassurance rating reported by new patients after reviewing practitioner credentials and treatment explainers."
      }
    ]
  },
  {
    id: "kawi-asia",
    title: "Kawi Asia",
    subtitle: "Modern Heritage E-Commerce Experience for Indonesian Specialty Goods",
    client: "Kawi Asia Collective",
    role: "Lead UI/UX & E-Commerce Product Designer",
    timeline: "Selected Work",
    category: "E-commerce",
    tags: ["E-commerce", "Brand Experience", "UI/UX", "Responsive Design", "Cultural Heritage"],
    liveUrl: "https://kawi.asia/",
    image: "/portfolio/kawi.asia.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [
      { label: "Cart Add Rate", value: "+44%" },
      { label: "Mobile Checkout Completion", value: "82%" },
      { label: "Storytelling Engagement", value: "3m 15s" }
    ],
    executiveSummary: "An e-commerce experience that brings heritage products into a modern shopping journey through clear collections, storytelling, and purchase paths.",
    clientContext: "Kawi Asia curates authentic Indonesian heritage goods, specialty botanical products, and artisanal crafts. The brand needed an online storefront that feels culturally respectful and rooted while providing a frictionless modern e-commerce checkout.",
    problemStatement: "Traditional craft websites often look dated or resemble cluttered marketplaces, diminishing the perceived value and artisanal heritage of premium handcrafted goods.",
    keyChallenges: [
      "Harmonizing rich historical storytelling with modern, high-conversion e-commerce UX best practices.",
      "Designing high-res product detail pages that showcase artisan craftsmanship, raw materials, and provenance.",
      "Creating a rapid, mobile-optimized checkout flow with transparent international shipping and currency options."
    ],
    uxStrategy: {
      approach: "Engineered a contemporary boutique shopping experience combining editorial lookbooks with streamlined 1-click cart drawers and transparent artisan storytelling.",
      steps: [
        {
          title: "Provenance & Craft Storytelling",
          description: "Integrated origin maps and artisan profiles directly into product detail sheets to elevate perceived value."
        },
        {
          title: "Minimalist Product Exploration",
          description: "Created clutter-free grid layouts with quick-add size selectors and high-res hover zoom on textile textures."
        },
        {
          title: "Frictionless Checkout Funnel",
          description: "Implemented an express sliding cart drawer supporting local e-wallets, credit cards, and automated postal calculation."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React, Tailwind CSS, and headless e-commerce state management with responsive layout optimization.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
      codeSnippet: "const ProductStoryCard = ({ product }: ProductProps) => (\n  <div className=\"group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xs hover:shadow-md transition-all\">\n    <div className=\"aspect-square relative overflow-hidden bg-slate-50\">\n      <img src={product.thumbnail} alt={product.name} className=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\" />\n      <span className=\"absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-800\">{product.region}</span>\n    </div>\n    <div className=\"p-4\">\n      <h4 className=\"font-bold text-sm text-slate-900\">{product.name}</h4>\n      <p className=\"text-xs text-cyan-800 font-mono font-bold mt-1\">Rp {product.price.toLocaleString()}</p>\n    </div>\n  </div>\n);",
      codeExplanation: "Artisanal product showcase card connecting origin details with rapid shopping interactions."
    },
    deliverables: [
      "Artisanal E-Commerce Storefront",
      "Product Provenance & Storytelling Framework",
      "Mobile Sliding Cart & Checkout Optimization"
    ],
    outcomes: [
      {
        metric: "+44%",
        impact: "Increase in add-to-cart conversions following the deployment of the editorial catalog layout."
      },
      {
        metric: "82%",
        impact: "Completed checkout rate on mobile devices across Southeast Asian customers."
      }
    ]
  },
  {
    id: "brother-plant",
    title: "Brother Plant",
    subtitle: "International Flora Export Catalogue & Botanical Certification Showcase",
    client: "Brother Plant Indonesia",
    role: "Lead UI/UX Designer & International Export Consultant",
    timeline: "Selected Work",
    category: "Export Catalogue",
    tags: ["Catalogue Website", "Export", "UI/UX", "Product Presentation", "Botanical Commerce"],
    liveUrl: "https://brotherplant.netlify.app/",
    image: "/portfolio/brotherplant.JPG",
    hasCaseStudy: true,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [
      { label: "International Inquiries", value: "+115%" },
      { label: "Export Deals Closed", value: "48 Countries" },
      { label: "Customs Clearance Clarity", value: "99%" }
    ],
    executiveSummary: "A visual-first digital catalogue for rare plants, designed to help local and international collectors explore collections and make inquiries.",
    clientContext: "Exporting rare tropical aroids (Monstera, Philodendron, Anthurium) to collectors in the US, Europe, and Japan requires immense trust regarding plant health, phytosanitary certifications, and shipping safety.",
    problemStatement: "International botanical buyers hesitated to buy from Indonesian nurseries due to scam fears, opaque phytosanitary paperwork, and unclear acclimatization instructions.",
    keyChallenges: [
      "Proving nursery authenticity and phytosanitary compliance prominently across all product pages.",
      "Presenting high-resolution variegation leaf photos, root development condition, and specimen sizes clearly.",
      "Building an international B2B inquiry cart supporting air freight cargo estimates and phytosanitary document requests."
    ],
    uxStrategy: {
      approach: "Developed a luxury botanical export showroom emphasizing USDA/EU phytosanitary compliance, climate-controlled packaging walkthroughs, and specimen-level leaf variegation galleries.",
      steps: [
        {
          title: "Export Trust Architecture",
          description: "Created dedicated compliance badges (Phytosanitary Certificate, Live Plant Guarantee, Heated Box Packaging)."
        },
        {
          title: "Specimen-Specific Leaf Inspector",
          description: "Designed an interactive photo gallery allowing collectors to examine individual leaf nodes, fenestrations, and root stems."
        },
        {
          title: "Direct Cargo Inquiry System",
          description: "Built an export wholesale cart calculating shipping box capacities and estimated cargo turnaround."
        }
      ]
    },
    architecture: {
      overview: "Constructed with React and Tailwind CSS with responsive high-resolution image optimization and currency converters.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"],
      codeSnippet: "const PlantSpecimenCard = ({ name, variegationLevel, phytoReady, priceUsd }: PlantProps) => (\n  <div className=\"p-4 rounded-2xl bg-white border border-purple-100 shadow-sm\">\n    <div className=\"flex justify-between items-center mb-2\">\n      <span className=\"text-[11px] font-mono text-purple-700 font-bold\">{variegationLevel} Variegation</span>\n      {phytoReady && <span className=\"text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold\">Phyto Ready</span>}\n    </div>\n    <h3 className=\"font-bold text-slate-800 text-sm\">{name}</h3>\n    <p className=\"font-mono font-bold text-slate-900 mt-2\">${priceUsd} USD</p>\n  </div>\n);",
      codeExplanation: "Specimen data card highlighting variegation grading and phytosanitary readiness for global collectors."
    },
    deliverables: [
      "International Botanical Export Portal",
      "Phytosanitary & Shipping Documentation Hub",
      "Direct Collector B2B Wholesale Inquiry Engine"
    ],
    outcomes: [
      {
        metric: "+115%",
        impact: "Increase in verified international collector wholesale inquiries within 4 months."
      },
      {
        metric: "48 Countries",
        impact: "Global market footprint reached with safe live plant deliveries."
      }
    ]
  },
  {
    id: "zanira-plant",
    title: "Zanira Plant",
    subtitle: "Boutique Tropical Plant Nursery & Global Collector Portfolio",
    client: "Zanira Plant Nursery",
    role: "Lead UI/UX Designer & Frontend Engineer",
    timeline: "Selected Work",
    category: "Export Website",
    tags: ["Export Website", "Brand Experience", "UI/UX", "Responsive Design", "Horticulture"],
    liveUrl: "https://zaniraplant.com/",
    hasCaseStudy: true,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [
      { label: "Global Lead Inquiries", value: "+80%" },
      { label: "Catalog Browsing Depth", value: "5.8 Pages" },
      { label: "Export Consultation Rate", value: "32%" }
    ],
    executiveSummary: "A tropical nursery website that highlights collection quality, credibility, and direct inquiry paths for international collectors.",
    clientContext: "Zanira Plant is a boutique Indonesian tropical nursery cultivating high-grade hybridized monsteras and rare philodendrons for global collectors. The brand needed an online gallery that conveyed organic elegance, nursery expertise, and reliable international logistics.",
    problemStatement: "Global buyers had difficulty gauging plant scale, leaf health, and export credentials from informal Instagram direct messages, which slowed down high-value transactions.",
    keyChallenges: [
      "Showcasing living botanical art with refined organic typography and soothing natural palettes.",
      "Translating complex greenhouse cultivation care instructions into clear visual collector guides.",
      "Creating a simple pathway for international collectors to request personalized plant video inspections before purchase."
    ],
    uxStrategy: {
      approach: "Engineered a serene, editorial botanical gallery that balances artistic aesthetic photography with rigorous export logistics clarity and 1-on-1 video inspection requests.",
      steps: [
        {
          title: "Botanical Editorial Aesthetic",
          description: "Implemented an organic design system utilizing deep forest greens, soft creams, and clean modern typography."
        },
        {
          title: "Curated Variety Portfolios",
          description: "Organized rare mother plants into clear taxonomic series with historical breeding notes."
        },
        {
          title: "VIP Video Inspection Booking",
          description: "Created an intuitive inquiry funnel where buyers can request a personalized live WhatsApp video walkaround of the exact specimen."
        }
      ]
    },
    architecture: {
      overview: "Built using React, Vite, and Tailwind CSS, prioritizing responsive image galleries and smooth scroll transitions.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      codeSnippet: "const PlantCareGuideSnippet = ({ species, humidityRange, lightRequirement }: GuideProps) => (\n  <div className=\"p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100\">\n    <h4 className=\"font-bold text-xs text-emerald-950 uppercase tracking-wide\">Care Standards: {species}</h4>\n    <div className=\"grid grid-cols-2 gap-3 mt-3 text-xs text-slate-700\">\n      <div><span className=\"text-slate-400 block\">Humidity:</span><strong>{humidityRange}</strong></div>\n      <div><span className=\"text-slate-400 block\">Light:</span><strong>{lightRequirement}</strong></div>\n    </div>\n  </div>\n);",
      codeExplanation: "Cultivation advisory card providing immediate reassurance on plant acclimation and greenhouse requirements."
    },
    deliverables: [
      "Botanical Nursery Gallery Website",
      "Specimen Inspection & Inquiry Portal",
      "Tropical Plant Care & Acclimatization Guide"
    ],
    outcomes: [
      {
        metric: "+80%",
        impact: "Increase in qualified international direct buyer inquiries within the first quarter."
      },
      {
        metric: "5.8 Pages",
        impact: "Average session browsing depth as collectors explore mother plant genetics and export guides."
      }
    ]
  }
];
