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
    subtitle: "",
    client: "",
    role: "",
    timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["UI/UX Design", "Dashboard", "Financial Services", "Product Flow"],
    liveUrl: "https://tab-produk.netlify.app/",
    image: "/portfolio/bsn_marketing_toolkit.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [],
    executiveSummary: "A digital sales toolkit that helps teams connect Sharia financial products with customer business needs through a clearer, step-by-step journey.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "janji-pinjam-dulu-seratus",
    title: "JANJI — Pinjam Dulu Seratus?",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["Product Design", "UX Writing", "Mobile UX", "Prototype"],
    liveUrl: "https://janji-promises.emergent.host/",
    image: "/portfolio/janji.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [],
    executiveSummary: "A promise-tracking platform that makes informal lending agreements clearer, more transparent, and less awkward to manage.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "kerjalagi-pro",
    title: "KerjaLagi Pro",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "HR Tech", "UX/UI", "Data Clarity"],
    liveUrl: "https://hirematurity.emergent.host/",
    image: "/portfolio/kerjalagi.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [],
    executiveSummary: "A recruitment dashboard concept that helps HR teams review candidate information, hiring progress, and priorities in one focused workspace.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "investihub",
    title: "InvestiHub",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Case Management", "Enterprise UX", "UI Design"],
    liveUrl: "https://investhub.netlify.app/",
    image: "/portfolio/investihub.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [],
    executiveSummary: "A case-management dashboard for tracking insurance claim investigations, assignments, and progress across each review stage.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "promedia-teknologi",
    title: "Promedia Teknologi",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Corporate Website",
    tags: ["Corporate Website", "Information Architecture", "UI/UX", "Responsive Design"],
    image: "/portfolio/promedia-web.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [],
    executiveSummary: "A corporate website for a digital media and technology ecosystem, structured to clearly communicate its value to publishers, creators, and partners.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "media-directory",
    title: "Media Directory",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Platform UX/UI",
    tags: ["Search UX", "Filter System", "Platform Design", "Information Architecture"],
    image: "/portfolio/media-direktori.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [],
    executiveSummary: "A searchable media directory that helps users discover media outlets by region, category, and publication needs.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "dashboard-media-listening",
    title: "Dashboard Media Listening",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Data Visualization", "Social Listening", "Enterprise UX"],
    image: "/portfolio/dashboard-media-listening.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-rose-500/10", to: "to-red-500/10", border: "border-rose-200/80", text: "text-rose-700" },
    metrics: [],
    executiveSummary: "A monitoring dashboard concept that helps communication teams identify trends, sentiment shifts, and emerging issues across public conversations.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "jembatan-tni-photo-video-competition",
    title: "Jembatan TNI — Photo & Video Competition",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Campaign Platform",
    tags: ["Campaign Website", "Landing Page", "Registration Flow", "UI/UX"],
    liveUrl: "https://jembatanku.netlify.app/",
    image: "/portfolio/jembatanku.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [],
    executiveSummary: "A campaign platform that combines event information, registration, and submission flows for a national photo and video competition.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "mofish",
    title: "Mofish",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["PWA", "Mobile UX", "Auction Platform", "Product Design"],
    image: "/portfolio/mofish auction.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [],
    executiveSummary: "A mobile-first auction experience for koi fish, designed around product imagery, lot information, and a clear bidding flow.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "sales-motor-website",
    title: "Sales Motor Website",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Lead Generation",
    tags: ["Landing Page", "Lead Generation", "Automotive", "Conversion UX"],
    liveUrl: "https://motorbaruyamaha.netlify.app/",
    image: "/portfolio/website-sales-motor.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [],
    executiveSummary: "A Yamaha motorcycle promotional website designed to turn interest into direct WhatsApp conversations through a focused, low-friction journey.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "ottoban-indonesia",
    title: "Ottoban Indonesia",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "E-commerce UX/UI",
    tags: ["E-commerce", "Product Finder", "Automotive", "UX/UI"],
    liveUrl: "https://ottoban.netlify.app/",
    image: "/portfolio/ottoban.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [],
    executiveSummary: "A tyre and wheel finder that simplifies technical vehicle specifications into a more intuitive product-selection journey.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "dashboard-monitoring-bank-socmed",
    title: "Dashboard Monitoring — Bank Socmed",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Dashboard UI",
    tags: ["Dashboard", "Social Intelligence", "Data Visualization", "Enterprise UX"],
    liveUrl: "https://hub-strategic-46.netlify.app/",
    image: "/portfolio/dashboard-bank.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [],
    executiveSummary: "A strategic monitoring dashboard combining social, online, and print signals to help teams identify alerts and response priorities.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "landing-page-gadai-bpkb",
    title: "Landing Page Gadai BPKB",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Lead Generation",
    tags: ["Landing Page", "Financial Services", "Conversion UX", "Responsive Design"],
    liveUrl: "https://danabpkb.netlify.app/",
    image: "/portfolio/dana-bpkb.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [],
    executiveSummary: "A financing service landing page that makes key information, simulation, and consultation paths easier to understand.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "asian-music-games",
    title: "Asian Music Games",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Event Website",
    tags: ["Event Website", "Landing Page", "UI/UX", "Responsive Design"],
    liveUrl: "https://asianmusicgames.netlify.app/",
    image: "/portfolio/asianmusicgames.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-rose-500/10", to: "to-red-500/10", border: "border-rose-200/80", text: "text-rose-700" },
    metrics: [],
    executiveSummary: "A regional event portal with an energetic visual direction and clear paths to event information and registration.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "yamaha-warrior",
    title: "Yamaha Warrior",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Mobile & PWA",
    tags: ["PWA", "Community Platform", "Gamification", "Mobile UX"],
    liveUrl: "https://y-warior.netlify.app/",
    image: "/portfolio/y-warrior.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
    metrics: [],
    executiveSummary: "A mobile-first challenge platform where users can follow activities, share moments, track rewards, and view the leaderboard.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "the-botanica-signature",
    title: "The Botanica Signature",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Property Landing Page",
    tags: ["Property Website", "Landing Page", "UI/UX", "Premium Brand"],
    liveUrl: "https://thebotanicasignaturebogor.com/",
    image: "/portfolio/thebotanicalsignature.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
    metrics: [],
    executiveSummary: "A premium property landing page that uses restrained navigation and strong visual storytelling to support high-intent inquiries.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "yayasan-terapi-indonesia-sehat",
    title: "Yayasan Terapi Indonesia Sehat",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Service Website",
    tags: ["Service Website", "Healthcare UX", "Responsive Design", "UI/UX"],
    liveUrl: "http://kangirwantherapispijat.com/",
    image: "/portfolio/kangirwantherapist.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
    metrics: [],
    executiveSummary: "A service website for therapy and home care, designed to make services, credibility, and booking access feel clear and reassuring.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "kawi-asia",
    title: "Kawi Asia",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "E-commerce",
    tags: ["E-commerce", "Brand Experience", "UI/UX", "Responsive Design"],
    liveUrl: "https://kawi.asia/",
    image: "/portfolio/kawi.asia.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
    metrics: [],
    executiveSummary: "An e-commerce experience that brings heritage products into a modern shopping journey through clear collections, storytelling, and purchase paths.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "brother-plant",
    title: "Brother Plant",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Export Catalogue",
    tags: ["Catalogue Website", "Export", "UI/UX", "Product Presentation"],
    liveUrl: "https://brotherplant.netlify.app/",
    image: "/portfolio/brotherplant.JPG",
    hasCaseStudy: false,
    mockupAccent: { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
    metrics: [],
    executiveSummary: "A visual-first digital catalogue for rare plants, designed to help local and international collectors explore collections and make inquiries.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  },
  {
    id: "zanira-plant",
    title: "Zanira Plant",
    subtitle: "", client: "", role: "", timeline: "Selected Work",
    category: "Export Website",
    tags: ["Export Website", "Brand Experience", "UI/UX", "Responsive Design"],
    liveUrl: "https://zaniraplant.com/",
    hasCaseStudy: false,
    mockupAccent: { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
    metrics: [],
    executiveSummary: "A tropical nursery website that highlights collection quality, credibility, and direct inquiry paths for international collectors.",
    clientContext: "", problemStatement: "", keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [], outcomes: []
  }
];
