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
    { name: "Next.js", category: "Framework", icon: "Layers", level: "Working Familiarity" },
    { name: "React", category: "Library", icon: "Code2", level: "Working Familiarity" },
    { name: "Tailwind CSS", category: "Styling", icon: "Palette", level: "Working Familiarity" },
    { name: "JavaScript", category: "Language", icon: "FileCode", level: "Working Familiarity" },
    { name: "Capacitor", category: "Mobile", icon: "Globe", level: "Working Familiarity" },
    { name: "Figma", category: "Design Tool", icon: "Figma", level: "Design Tools" },
    { name: "Adobe Photoshop", category: "Design Tool", icon: "Palette", level: "Design Tools" },
    { name: "Adobe Illustrator", category: "Design Tool", icon: "Palette", level: "Design Tools" },
    { name: "Git", category: "Workflow", icon: "Server", level: "Development Workflow" },
    { name: "Cursor & AI Agents", category: "Workflow", icon: "Sparkles", level: "Development Workflow" },
  ],

  projects: [
    {
      id: "lsp-iai",
      title: "LSP IAI — Professional Certification Platform",
      subtitle: "Web Application · Workflow UI · Dashboard · Rapid Prototyping | In Progress",
      category: "Web Application",
      description: "Translating complex operational requirements and multi-step user journeys into functional browser-based prototypes. Refining responsive web application UI and interface flows through iterative development to support validation and handoff.",
      fullDescription: "Translating complex operational requirements and multi-step user journeys into functional browser-based prototypes. Refining responsive web application UI and interface flows through iterative development to support validation and handoff.",
      tags: ["React", "Next.js", "Tailwind CSS", "UI Architecture"],
      metrics: [
        { label: "Status", value: "In Progress" },
        { label: "Platform", value: "Web App" },
        { label: "Focus", value: "Dashboard" }
      ],
      keyFeatures: [
        "Complex operational requirements translated into browser-based prototypes.",
        "Multi-step user journeys mapped out for certification workflows.",
        "Iterative development supporting validation and seamless handoff."
      ],
      architectureOverview: "React and Tailwind CSS for responsive components, accelerating the validation phase through functional prototyping.",
      mockupColor: "from-slate-100 to-teal-50/40 border-teal-100",
      specCodeSnippet: `// Dashboard Workflow Validation
export const CertificationFlow = () => {
  return (
    <WorkflowProvider>
      <StepNavigation />
      <FormRenderer schema={certificateSchema} />
    </WorkflowProvider>
  );
};`
    },
    {
      id: "investihub",
      title: "InvestiHub — Dashboard Prototype",
      subtitle: "Web Application · Dashboard UI · Rapid Prototyping | In Progress",
      category: "Dashboard UI",
      description: "Translating data-oriented workflows into structured dashboard UI concepts. Developing responsive interfaces and interactive functional prototypes for ongoing product evaluation.",
      fullDescription: "Translating data-oriented workflows into structured dashboard UI concepts. Developing responsive interfaces and interactive functional prototypes for ongoing product evaluation.",
      tags: ["Dashboard", "React", "Data Visualization"],
      metrics: [
        { label: "Status", value: "In Progress" },
        { label: "Data Flows", value: "Complex" },
        { label: "Focus", value: "UI/UX" }
      ],
      keyFeatures: [
        "Data-oriented workflows designed for clarity and efficiency.",
        "Interactive functional prototypes for ongoing evaluation.",
        "Responsive interfaces adaptable to various screen sizes."
      ],
      architectureOverview: "Component-driven dashboard architecture focusing on responsive layouts and data visualization states.",
      mockupColor: "from-slate-100 to-slate-200/50 border-slate-200",
      specCodeSnippet: `// Data Table Implementation
const DataTable = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <Table>
        <TableHeader columns={columns} />
        <TableBody data={data} />
      </Table>
    </div>
  );
};`
    },
    {
      id: "y-warrior",
      title: "Y-Warrior — PWA Prototype",
      subtitle: "Progressive Web App · Mobile-First UI · Functional Prototyping",
      category: "Progressive Web App",
      description: "Designed and developed a functional PWA prototype focusing on mobile-first user experience. Used AI-assisted rapid prototyping workflows to efficiently translate product concepts into responsive interface structures.",
      fullDescription: "Designed and developed a functional PWA prototype focusing on mobile-first user experience. Used AI-assisted rapid prototyping workflows to efficiently translate product concepts into responsive interface structures.",
      tags: ["PWA", "Mobile-First", "AI-Assisted"],
      metrics: [
        { label: "Type", value: "PWA" },
        { label: "Approach", value: "Mobile-First" },
        { label: "Workflow", value: "AI-Assisted" }
      ],
      keyFeatures: [
        "Mobile-first user experience optimized for touch interactions.",
        "AI-assisted rapid prototyping workflows for faster iteration.",
        "Responsive interface structures mapped from product concepts."
      ],
      architectureOverview: "Progressive Web App leveraging service workers and mobile-optimized UI components.",
      mockupColor: "from-slate-100 to-teal-50/30 border-teal-200",
      specCodeSnippet: `// Mobile-First Navigation
const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<Home />} label="Home" />
        <NavItem icon={<Activity />} label="Workout" />
        <NavItem icon={<User />} label="Profile" />
      </div>
    </nav>
  );
};`
    },
    {
      id: "mofish-auctions",
      title: "MoFish Auctions — PWA Prototype",
      subtitle: "Progressive Web App · Mobile UI · Functional Prototyping",
      category: "Progressive Web App",
      description: "Created an interactive PWA prototype translating product requirements into a mobile-oriented interface. Developed functional interface flows to demonstrate product behavior beyond static UI screens.",
      fullDescription: "Created an interactive PWA prototype translating product requirements into a mobile-oriented interface. Developed functional interface flows to demonstrate product behavior beyond static UI screens.",
      tags: ["PWA", "Mobile UI", "Prototyping"],
      metrics: [
        { label: "Type", value: "PWA" },
        { label: "Interface", value: "Mobile" },
        { label: "Output", value: "Prototype" }
      ],
      keyFeatures: [
        "Interactive PWA demonstrating real product behavior.",
        "Mobile-oriented interface designed for auction workflows.",
        "Functional interface flows surpassing static screens."
      ],
      architectureOverview: "Interactive client-side routing with mock data states to simulate real auction application behavior.",
      mockupColor: "from-slate-100 to-blue-50/30 border-blue-100",
      specCodeSnippet: `// Auction Item Card
const AuctionCard = ({ item, currentBid }) => {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-white">
      <img src={item.image} className="w-full h-40 object-cover rounded-lg mb-3" />
      <h3 className="font-bold text-slate-900">{item.name}</h3>
      <p className="text-teal-600 font-semibold mt-2">Current Bid: {currentBid}</p>
      <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-lg">Place Bid</button>
    </div>
  );
};`
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
