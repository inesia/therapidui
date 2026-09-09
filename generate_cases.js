const fs = require('fs');

const rawData = [
  {
    title: "BSN Digital Sales Toolkit",
    category: "Dashboard UI",
    description: "A digital sales toolkit that helps teams connect Sharia financial products with customer business needs through a clearer, step-by-step journey.",
    tags: ["UI/UX Design", "Dashboard", "Financial Services", "Product Flow"],
    liveUrl: "https://tab-produk.netlify.app/",
    image: "bsn_marketing_toolkit.JPG"
  },
  {
    title: "JANJI — Pinjam Dulu Seratus?",
    category: "Mobile & PWA",
    description: "A promise-tracking platform that makes informal lending agreements clearer, more transparent, and less awkward to manage.",
    tags: ["Product Design", "UX Writing", "Mobile UX", "Prototype"],
    liveUrl: "https://janji-promises.emergent.host/",
    image: "janji.JPG"
  },
  {
    title: "KerjaLagi Pro",
    category: "Dashboard UI",
    description: "A recruitment dashboard concept that helps HR teams review candidate information, hiring progress, and priorities in one focused workspace.",
    tags: ["Dashboard", "HR Tech", "UX/UI", "Data Clarity"],
    liveUrl: "https://hirematurity.emergent.host/",
    image: "kerjalagi.JPG"
  },
  {
    title: "InvestiHub",
    category: "Dashboard UI",
    description: "A case-management dashboard for tracking insurance claim investigations, assignments, and progress across each review stage.",
    tags: ["Dashboard", "Case Management", "Enterprise UX", "UI Design"],
    liveUrl: "https://investhub.netlify.app/",
    image: "investihub.JPG"
  },
  {
    title: "Promedia Teknologi",
    category: "Corporate Website",
    description: "A corporate website for a digital media and technology ecosystem, structured to clearly communicate its value to publishers, creators, and partners.",
    tags: ["Corporate Website", "Information Architecture", "UI/UX", "Responsive Design"],
    image: "promedia-web.JPG"
  },
  {
    title: "Media Directory",
    category: "Platform UX/UI",
    description: "A searchable media directory that helps users discover media outlets by region, category, and publication needs.",
    tags: ["Search UX", "Filter System", "Platform Design", "Information Architecture"],
    image: "media-direktori.JPG"
  },
  {
    title: "Dashboard Media Listening",
    category: "Dashboard UI",
    description: "A monitoring dashboard concept that helps communication teams identify trends, sentiment shifts, and emerging issues across public conversations.",
    tags: ["Dashboard", "Data Visualization", "Social Listening", "Enterprise UX"],
    image: "dashboard-media-listening.JPG"
  },
  {
    title: "Jembatan TNI — Photo & Video Competition",
    category: "Campaign Platform",
    description: "A campaign platform that combines event information, registration, and submission flows for a national photo and video competition.",
    tags: ["Campaign Website", "Landing Page", "Registration Flow", "UI/UX"],
    liveUrl: "https://jembatanku.netlify.app/",
    image: "jembatanku.JPG"
  },
  {
    title: "Mofish",
    category: "Mobile & PWA",
    description: "A mobile-first auction experience for koi fish, designed around product imagery, lot information, and a clear bidding flow.",
    tags: ["PWA", "Mobile UX", "Auction Platform", "Product Design"],
    image: "mofish auction.JPG"
  },
  {
    title: "Sales Motor Website",
    category: "Lead Generation",
    description: "A Yamaha motorcycle promotional website designed to turn interest into direct WhatsApp conversations through a focused, low-friction journey.",
    tags: ["Landing Page", "Lead Generation", "Automotive", "Conversion UX"],
    liveUrl: "https://motorbaruyamaha.netlify.app/",
    image: "website-sales-motor.JPG"
  },
  {
    title: "Ottoban Indonesia",
    category: "E-commerce UX/UI",
    description: "A tyre and wheel finder that simplifies technical vehicle specifications into a more intuitive product-selection journey.",
    tags: ["E-commerce", "Product Finder", "Automotive", "UX/UI"],
    liveUrl: "https://ottoban.netlify.app/",
    image: "ottoban.JPG"
  },
  {
    title: "Dashboard Monitoring — Bank Socmed",
    category: "Dashboard UI",
    description: "A strategic monitoring dashboard combining social, online, and print signals to help teams identify alerts and response priorities.",
    tags: ["Dashboard", "Social Intelligence", "Data Visualization", "Enterprise UX"],
    liveUrl: "https://hub-strategic-46.netlify.app/",
    image: "dashboard-bank.JPG"
  },
  {
    title: "Landing Page Gadai BPKB",
    category: "Lead Generation",
    description: "A financing service landing page that makes key information, simulation, and consultation paths easier to understand.",
    tags: ["Landing Page", "Financial Services", "Conversion UX", "Responsive Design"],
    liveUrl: "https://danabpkb.netlify.app/",
    image: "dana-bpkb.JPG"
  },
  {
    title: "Asian Music Games",
    category: "Event Website",
    description: "A regional event portal with an energetic visual direction and clear paths to event information and registration.",
    tags: ["Event Website", "Landing Page", "UI/UX", "Responsive Design"],
    liveUrl: "https://asianmusicgames.netlify.app/",
    image: "asianmusicgames.JPG"
  },
  {
    title: "Yamaha Warrior",
    category: "Mobile & PWA",
    description: "A mobile-first challenge platform where users can follow activities, share moments, track rewards, and view the leaderboard.",
    tags: ["PWA", "Community Platform", "Gamification", "Mobile UX"],
    liveUrl: "https://y-warior.netlify.app/",
    image: "y-warrior.JPG"
  },
  {
    title: "The Botanica Signature",
    category: "Property Landing Page",
    description: "A premium property landing page that uses restrained navigation and strong visual storytelling to support high-intent inquiries.",
    tags: ["Property Website", "Landing Page", "UI/UX", "Premium Brand"],
    liveUrl: "https://thebotanicasignaturebogor.com/",
    image: "thebotanicalsignature.JPG"
  },
  {
    title: "Yayasan Terapi Indonesia Sehat",
    category: "Service Website",
    description: "A service website for therapy and home care, designed to make services, credibility, and booking access feel clear and reassuring.",
    tags: ["Service Website", "Healthcare UX", "Responsive Design", "UI/UX"],
    liveUrl: "http://kangirwantherapispijat.com/",
    image: "kangirwantherapist.JPG"
  },
  {
    title: "Kawi Asia",
    category: "E-commerce",
    description: "An e-commerce experience that brings heritage products into a modern shopping journey through clear collections, storytelling, and purchase paths.",
    tags: ["E-commerce", "Brand Experience", "UI/UX", "Responsive Design"],
    liveUrl: "https://kawi.asia/",
    image: "kawi.asia.JPG"
  },
  {
    title: "Brother Plant",
    category: "Export Catalogue",
    description: "A visual-first digital catalogue for rare plants, designed to help local and international collectors explore collections and make inquiries.",
    tags: ["Catalogue Website", "Export", "UI/UX", "Product Presentation"],
    liveUrl: "https://brotherplant.netlify.app/",
    image: "brotherplant.JPG"
  },
  {
    title: "Zanira Plant",
    category: "Export Website",
    description: "A tropical nursery website that highlights collection quality, credibility, and direct inquiry paths for international collectors.",
    tags: ["Export Website", "Brand Experience", "UI/UX", "Responsive Design"],
    liveUrl: "https://zaniraplant.com/",
    image: ""
  }
];

const mockups = [
  { from: "from-teal-500/10", to: "to-emerald-500/10", border: "border-teal-200/80", text: "text-teal-700" },
  { from: "from-blue-500/10", to: "to-indigo-500/10", border: "border-blue-200/80", text: "text-blue-700" },
  { from: "from-amber-500/10", to: "to-orange-500/10", border: "border-amber-200/80", text: "text-amber-700" },
  { from: "from-cyan-500/10", to: "to-blue-500/10", border: "border-cyan-200/80", text: "text-cyan-700" },
  { from: "from-purple-500/10", to: "to-violet-500/10", border: "border-purple-200/80", text: "text-purple-700" },
  { from: "from-emerald-500/10", to: "to-teal-500/10", border: "border-emerald-200/80", text: "text-emerald-700" },
  { from: "from-rose-500/10", to: "to-red-500/10", border: "border-rose-200/80", text: "text-rose-700" }
];

let finalOutput = \`export interface CaseStudyMetric {
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
\`;

rawData.forEach((item, index) => {
  const id = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const accent = mockups[index % mockups.length];
  
  finalOutput += \`  {
    id: "\${id}",
    title: "\${item.title}",
    subtitle: "",
    client: "",
    role: "",
    timeline: "Selected Work",
    category: "\${item.category}",
    tags: \${JSON.stringify(item.tags)},
    \${item.liveUrl ? \`liveUrl: "\${item.liveUrl}",\` : ''}
    \${item.image ? \`image: "/portfolio/\${item.image}",\` : ''}
    hasCaseStudy: false,
    mockupAccent: \${JSON.stringify(accent, null, 4).replace(/\\n/g, '\\n    ')},
    metrics: [],
    executiveSummary: "\${item.description}",
    clientContext: "",
    problemStatement: "",
    keyChallenges: [],
    uxStrategy: { approach: "", steps: [] },
    architecture: { overview: "", stack: [], codeSnippet: "", codeExplanation: "" },
    deliverables: [],
    outcomes: []
  },\n\`;
});

finalOutput += \`];\n\`;

fs.writeFileSync('C:\\\\xampp\\\\htdocs\\\\inesia.dev\\\\src\\\\data\\\\portfolioCaseStudies.ts', finalOutput);
console.log("Done");
