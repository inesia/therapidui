export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architectureOverview: string;
  mockupColor: string;
  liveUrl?: string;
  githubUrl?: string;
  specCodeSnippet: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const PORTFOLIO_DATA = {
  person: {
    name: "Irwan Dharmawan",
    role: "Lead UI/UX Engineer",
    tagline: "Bridging the Gap Between Vision and Execution.",
    subtagline: "Hi, I'm Irwan Dharmawan. A Lead UI/UX Engineer specializing in Rapid Code-Based Prototyping.",
    statusBadge: "👋 Available for Remote Opportunities",
    location: "Jakarta, Indonesia (GMT+7) — Working Globally",
    email: "irwan@inesia.dev",
    linkedin: "https://linkedin.com/in/irwandharmawan",
    github: "https://github.com/inesia",
    bioParagraphs: [
      "I am a Lead UI/UX Engineer who bridges the gap between business objectives and technical execution. Coming from a background in Economics, I approach digital product design not just focusing on aesthetics, but on business efficiency, scalable value chains, and user conversion.",
      "As a self-taught technologist, I specialize in AI-Augmented Rapid Prototyping. I don't just hand off static Figma screens; I leverage modern workflows to deliver functional, developer-ready front-end architectures using Next.js, React, and Git.",
      "By acting as the bridge between design visions and backend logic, I help enterprise clients—ranging from massive digital media ecosystems to B2B banking platforms—drastically reduce handoff friction, iterate faster, and accelerate their product's time-to-market."
    ]
  },
  
  techStack: [
    { name: "Next.js", category: "Framework", icon: "Layers", level: "Expert" },
    { name: "Tailwind CSS", category: "Styling", icon: "Palette", level: "Expert" },
    { name: "React", category: "Library", icon: "Code2", level: "Expert" },
    { name: "TypeScript", category: "Language", icon: "FileCode", level: "Expert" },
    { name: "Figma", category: "Design Tool", icon: "Figma", level: "Expert" },
    { name: "Framer Motion", category: "Animation", icon: "Sparkles", level: "Advanced" },
    { name: "Design Tokens", category: "Architecture", icon: "Sliders", level: "Expert" },
    { name: "Node.js", category: "Backend/CLI", icon: "Server", level: "Intermediate" },
    { name: "Storybook", category: "Documentation", icon: "BookOpen", level: "Advanced" },
    { name: "GraphQL / REST", category: "API Integration", icon: "Globe", level: "Advanced" },
  ],

  projects: [
    {
      id: "enterprise-media-ecosystem",
      title: "Enterprise Media Ecosystem (Promedia)",
      subtitle: "Multi-Brand Design System & Headless Content Platform",
      category: "Design System & Frontend Platform",
      description: "Engineered the scalable UI/UX architecture for a massive digital media ecosystem supporting over 1,300+ independent publishers. Delivered production-ready UI components to ensure seamless performance and a unified design system across a high-traffic network.",
      fullDescription: "Engineered the scalable UI/UX architecture for a massive digital media ecosystem supporting over 1,300+ independent publishers. Delivered production-ready UI components to ensure seamless performance and a unified design system across a high-traffic network.",
      tags: ["Next.js", "Tailwind CSS", "UI Architecture", "Figma"],
      metrics: [
        { label: "Independent Publishers", value: "1,300+" },
        { label: "Core Web Vitals", value: "99/100" },
        { label: "Design Token Adoption", value: "100%" }
      ],
      keyFeatures: [
        "Automated Figma-to-Tailwind design token syncing via GitHub Actions.",
        "Dynamic theme provider supporting instant dark/light/brand mode switches.",
        "Accessible, high-performance reader layout engine supporting millions of monthly visits."
      ],
      architectureOverview: "Leveraged Next.js App Router with server-driven component caching and Tailwind CSS CSS variables for dynamic runtime brand swapping.",
      mockupColor: "from-slate-100 to-teal-50/40 border-teal-100",
      specCodeSnippet: `// Design Token Swapper Example
export const themeTokenConfig = {
  brandPrimary: "var(--brand-primary, #0D9488)",
  surfaceCanvas: "var(--surface-canvas, #FCFCFC)",
  textPrimary: "var(--text-primary, #0F172A)",
  fontFamily: "var(--font-sans, 'Plus Jakarta Sans')",
};`
    },
    {
      id: "b2b-banking-value-chain",
      title: "B2B Banking Value Chain (Bank BSI)",
      subtitle: "High-Frequency Financial Dashboard & Treasury Engine",
      category: "Fintech & Data Visualization",
      description: "Designed and developed specialized B2B digital platforms for Bank Syariah Indonesia. Created the complex UI for the Business Value Chain system and MSME empowerment portal, translating intricate banking workflows into intuitive, developer-ready front-end prototypes.",
      fullDescription: "Designed and developed specialized B2B digital platforms for Bank Syariah Indonesia. Created the complex UI for the Business Value Chain system and MSME empowerment portal, translating intricate banking workflows into intuitive, developer-ready front-end prototypes.",
      tags: ["React", "HTML/CSS", "Enterprise UX", "Dashboard Design"],
      metrics: [
        { label: "Task Completion Speed", value: "+38%" },
        { label: "User Error Rate", value: "-62%" },
        { label: "Active Enterprise Users", value: "120K+" }
      ],
      keyFeatures: [
        "Keyboard-driven rapid transaction entry modal with real-time validation.",
        "Virtualization engine for rendering 10,000+ transaction rows without lag.",
        "Accessible color-contrast palette optimized for 8-hour daily trader usage."
      ],
      architectureOverview: "React 19 virtual DOM with memoized chart layers, WebSockets data streaming, and custom accessible ARIA data tables.",
      mockupColor: "from-slate-100 to-slate-200/50 border-slate-200",
      specCodeSnippet: `// High-Frequency Real-time Stream Hook
const useLiquidityStream = (pairId: string) => {
  const [rate, setRate] = useState<number>(0);
  useEffect(() => {
    const ws = new WebSocket(\`wss://api.bank.dev/stream/\${pairId}\`);
    ws.onmessage = (e) => setRate(JSON.parse(e.data).rate);
    return () => ws.close();
  }, [pairId]);
  return { rate };
};`
    },
    {
      id: "cross-platform-wellness-platform",
      title: "Cross-Platform Wellness Platform (Wellnooz)",
      subtitle: "Modern Wellness Application",
      category: "Product Design & Web App",
      description: "Spearheaded the rapid code-based prototyping for a modern wellness application. Utilized the latest front-end technologies to deliver a pixel-perfect, highly interactive cross-platform UI experience that dramatically accelerated the backend integration phase.",
      fullDescription: "Spearheaded the rapid code-based prototyping for a modern wellness application. Utilized the latest front-end technologies to deliver a pixel-perfect, highly interactive cross-platform UI experience that dramatically accelerated the backend integration phase.",
      tags: ["React 19", "Tailwind CSS v4", "Capacitor", "Mobile UI"],
      metrics: [
        { label: "User Engagement", value: "+54%" },
        { label: "NPS Score", value: "72" },
        { label: "Integration Speed", value: "3.2x faster" }
      ],
      keyFeatures: [
        "Smooth, non-jarring state transitions using Framer Motion layout animations.",
        "Cross-platform compatibility using modern Capacitor wrappers.",
        "Integrated interactive tracking modules for wellness routines."
      ],
      architectureOverview: "Clean component hierarchy built with React, Tailwind CSS, and headless UI primitives compiled for cross-platform delivery.",
      mockupColor: "from-slate-100 to-teal-50/30 border-slate-200",
      specCodeSnippet: `// Dynamic Layout Transition for Wellness Tracking
<motion.div 
  layout 
  transition={{ type: "spring", stiffness: 350, damping: 25 }}
  className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-soft"
>
  <WidgetHeader title="Daily Wellness" />
  <TrackingChart data={wellnessData} />
</motion.div>`
    }
  ] as Project[],

  experiences: [
    {
      period: "2022 — PRESENT",
      role: "Lead UI/UX Engineer",
      company: "Inesia Digital Lab",
      location: "Remote",
      description: "Leading a cross-functional team of 6 frontend engineers and product designers. Championing rapid code-based prototyping, enterprise design system governance, and modern web application performance.",
      highlights: [
        "Reduced design-to-code handoff friction by 40% through reusable component libraries.",
        "Mentored senior designers on HTML/CSS code capabilities and interactive state modeling.",
        "Architected core front-end platforms serving over 5M active monthly users across enterprise clients."
      ],
      skills: ["Design Systems", "Next.js", "Tailwind CSS", "React", "Team Leadership", "Code Prototyping"]
    },
    {
      period: "2019 — 2022",
      role: "Staff UI/UX Frontend Architect",
      company: "Apex Tech Media",
      location: "Jakarta, Indonesia",
      description: "Spearheaded the redesign and component modularization of multi-brand web platforms, achieving 99+ Core Web Vitals scores.",
      highlights: [
        "Created an automated design token generator linking Figma variables directly to Tailwind CSS configs.",
        "Pioneered micro-frontend component adoption for high-traffic media portals."
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Web Vitals"]
    },
    {
      period: "2016 — 2019",
      role: "Senior Product Designer & Developer",
      company: "Creative Studio Solutions",
      location: "Jakarta, Indonesia",
      description: "Crafted high-converting marketing experiences, web apps, and design systems for enterprise tech clients.",
      highlights: [
        "Delivered 30+ client projects from wireframe sketch to deployed code.",
        "Built responsive UI component specs used by internal dev teams."
      ],
      skills: ["UX Research", "Figma", "HTML5/CSS3", "JavaScript", "Responsive Web Design"]
    }
  ] as ExperienceItem[],

  principles: [
    {
      title: "Functional Code Prototypes",
      desc: "Static mockups hide edge cases. Code prototypes reveal actual user flow, responsive behavior, and layout constraints early."
    },
    {
      title: "Systematic Typography & Spacing",
      desc: "Great UI starts with rhythm. Using strict typographic hierarchies and 4px/8px layout grids ensures visual elegance."
    },
    {
      title: "Subtle & Purposeful Motion",
      desc: "Animation should inform, not distract. Smooth 60fps micro-interactions guide user attention seamlessly."
    },
    {
      title: "Design Token Governance",
      desc: "Single source of truth for colors, scales, and elevation. Seamless synchronization between Figma and production code."
    }
  ]
};
