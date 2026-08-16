export interface ResumeData {
  lang: string;
  downloadPdf: string;
  name: string;
  headline: string;
  locationInfo: string;
  professionalSummaryTitle: string;
  professionalSummaryParagraphs: string[];
  coreExpertiseTitle: string;
  coreExpertiseGroups: { title: string; items: string }[];
  toolsTitle: string;
  toolsPrimaryLabel: string;
  toolsPrimaryItems: string;
  toolsWorkflowLabel: string;
  toolsWorkflowItems: string;
  toolsFamiliarityLabel: string;
  toolsFamiliarityItems: string;
  experienceTitle: string;
  experiences: {
    title: string;
    company: string;
    date: string;
    location: string;
    note?: string;
    bullets: string[];
    subProjects?: {
      title: string;
      subtitle?: string;
      bullets: string[];
    }[];
  }[];
  projectsTitle: string;
  projects: {
    title: string;
    subtitle: string;
    prototypeLabel: string;
    prototypeUrl: string;
    prototypeDisplay: string;
    bullets: string[];
  }[];
  capabilitiesTitle: string;
  capabilitiesBullets: string[];
  educationTitle: string;
  educationDegree: string;
  educationSchool: string;
}

export const resumeEn: ResumeData = {
  lang: 'en',
  downloadPdf: 'Download PDF',
  name: 'IRWAN DHARMAWAN',
  headline: 'Senior UI/UX Designer | UI Engineering & Rapid Prototyping',
  locationInfo: 'Jakarta, Indonesia · Open to Remote & Hybrid Opportunities',
  professionalSummaryTitle: 'Professional Summary',
  professionalSummaryParagraphs: [
    'Senior UI/UX professional with 15+ years of hands-on experience translating business requirements, complex workflows, and product ideas into clear digital interfaces and functional prototypes.',
    'Strong expertise in UI/UX, HTML/CSS, responsive interface implementation, and design-to-development workflows across enterprise platforms, CRM systems, dashboards, media, banking, web applications, mobile apps, and Progressive Web Apps.',
    'Currently using AI-assisted development workflows and coding agents to accelerate prototyping while maintaining a strong focus on usability, interface quality, responsive behavior, and practical implementation.'
  ],
  coreExpertiseTitle: 'Core Expertise',
  coreExpertiseGroups: [
    { title: 'UI/UX & Product Design', items: 'UI/UX Design · Interface Design · Interaction Design · User Flows · Wireframing · Responsive UI · Dashboard Design · Enterprise UI · Mobile App UI · PWA Interface Design · Design Systems · Rapid Prototyping' },
    { title: 'UI Engineering', items: 'HTML5 · CSS3 · Responsive Web Design · Cross-Browser UI · Design-to-Code · UI Component Structuring · Front-End Prototyping · Design-to-Development Handoff' },
    { title: 'Rapid & AI-Assisted Prototyping', items: 'Web App Prototyping · Mobile App Prototyping · PWA Prototyping · Interactive Prototypes · AI Coding Agents · Agent-Directed Development' }
  ],
  toolsTitle: 'Tools & Working Technologies',
  toolsPrimaryLabel: 'Design Tools',
  toolsPrimaryItems: 'Figma · Adobe Photoshop · Adobe Illustrator',
  toolsWorkflowLabel: 'Development Workflow',
  toolsWorkflowItems: 'Git · Cursor · AI Coding Agents',
  toolsFamiliarityLabel: 'Working Familiarity',
  toolsFamiliarityItems: 'React · Next.js · Tailwind CSS · JavaScript · Capacitor',
  experienceTitle: 'Professional Experience',
  experiences: [
    {
      title: 'UI/UX Engineer',
      company: 'Ivosights · Freelance',
      date: 'Aug 2025 – Aug 2026',
      location: 'Remote | Jakarta, Indonesia',
      bullets: [
        'Translated complex enterprise requirements into responsive, functional interface prototypes using rapid code-based prototyping.',
        'Designed data-intensive CRM interfaces covering sales pipelines, conversion analytics, revenue tracking, and operational dashboards.',
        'Designed executive command-center interfaces incorporating multi-channel monitoring, sentiment analysis, data visualization, and centralized information views.',
        'Applied strong HTML/CSS expertise together with AI-assisted development workflows to rapidly build and iterate browser-based prototypes.',
        'Bridged UI/UX and practical implementation, improving communication between stakeholders, product teams, and developers in a remote working environment.'
      ]
    },
    {
      title: 'Independent UI/UX Designer & Rapid Prototyping',
      company: '',
      date: '2021 – Present',
      location: 'Freelance / Concurrent Projects | Remote',
      bullets: [],
      subProjects: [
        {
          title: 'Wellnooz — UAE-Based Wellness Application',
          bullets: [
            'Designed the initial UI and functional prototype for a UAE-based wellness application currently in development.',
            'Leveraged HTML/CSS as a core strength to build responsive interfaces.',
            'Utilized React, Tailwind CSS, and Capacitor through AI-assisted prototyping workflows to accelerate delivery.'
          ]
        },
        {
          title: 'Promedia — Digital Media Ecosystem',
          bullets: [
            'Designed UI/UX solutions for a large-scale digital media ecosystem supporting 1,000+ independent publishers.',
            'Developed scalable UI patterns and reusable interface structures to ensure consistency across publishing properties.',
            'Ensured practical design-to-development implementation for smooth engineering handoffs.'
          ]
        }
      ]
    },
    {
      title: 'Lead UI/UX Engineer',
      company: 'PT Aplika Media Nusantara',
      date: '2014 – Present',
      location: 'PT Aplika Media Nusantara | Jakarta, Indonesia',
      note: 'Also involved in company operations and business management while remaining hands-on in digital product and interface work.',
      bullets: [],
      subProjects: [
        {
          title: 'Bank BSI / Bank Syariah Mandiri — B2B Digital Platforms',
          bullets: [
            'Designed interfaces for specialized B2B initiatives including Business Value Chain and Go-UMKM platforms.',
            'Translated complex business processes into structured digital interfaces to simplify interactions for enterprise and SME users.'
          ]
        },
        {
          title: 'Otojurnalisme.com — Automotive Media Platform',
          bullets: [
            'Led UI/UX architecture and interface development, translating product concepts into practical digital experiences.',
            'Developed reusable interface patterns and functional prototypes to clarify requirements before full development.'
          ]
        },
        {
          title: 'Corporate Digital Experiences (Federal Oil & Honda Community)',
          bullets: [
            'Designed digital interfaces and campaign-related experiences while maintaining strict corporate brand standards and visual consistency.',
            'Worked directly with stakeholders and developers to clarify requirements and reduce ambiguity during handoff.'
          ]
        }
      ]
    },
    {
      title: 'UI/UX & Front-End Designer',
      company: 'PT Digital Otomotifindo — Kompas Gramedia Group',
      date: '2011 – 2014',
      location: 'PT Digital Otomotifindo — Kompas Gramedia Group | Jakarta, Indonesia',
      bullets: [
        'Spearheaded UI/UX design and practical HTML/CSS implementation for otomotifnet.com and various automotive digital initiatives.',
        'Designed and implemented campaign microsites and digital activation experiences.',
        'Collaborated closely with editorial, marketing, and development teams to produce functional front-end mockups for internal and client-facing projects.'
      ]
    },
    {
      title: 'UI/UX Designer & Front-End Prototyper',
      company: 'PT Agranet Multicitra Siberkom — detik.com',
      date: '2007 – 2011',
      location: 'PT Agranet Multicitra Siberkom — detik.com | Jakarta, Indonesia',
      bullets: [
        'Designed user interfaces and functional HTML/CSS prototypes for internal digital products and high-traffic microsites.',
        'Contributed to transitioning the design workflow from static visual mockups toward practical browser-based prototypes.'
      ]
    }
  ],
  projectsTitle: 'Selected Current Projects',
  projects: [
    {
      title: 'LSP IAI — Professional Certification Platform',
      subtitle: 'Web Application · Workflow UI · Dashboard · Rapid Prototyping | In Progress',
      prototypeLabel: 'Prototype',
      prototypeUrl: 'https://staging-app.lsp-iai.id/',
      prototypeDisplay: 'staging-app.lsp-iai.id',
      bullets: [
        'Translating complex operational requirements and multi-step user journeys into functional browser-based prototypes.',
        'Refining responsive web application UI and interface flows through iterative development to support validation and handoff.'
      ]
    },
    {
      title: 'InvestiHub — Dashboard Prototype',
      subtitle: 'Web Application · Dashboard UI · Rapid Prototyping | In Progress',
      prototypeLabel: 'Prototype',
      prototypeUrl: 'https://investihub.netlify.app/dashboard',
      prototypeDisplay: 'investihub.netlify.app/dashboard',
      bullets: [
        'Translating data-oriented workflows into structured dashboard UI concepts.',
        'Developing responsive interfaces and interactive functional prototypes for ongoing product evaluation.'
      ]
    },
    {
      title: 'Y-Warrior — PWA Prototype',
      subtitle: 'Progressive Web App · Mobile-First UI · Functional Prototyping',
      prototypeLabel: 'Prototype',
      prototypeUrl: 'https://y-warior.netlify.app/',
      prototypeDisplay: 'y-warior.netlify.app',
      bullets: [
        'Designed and developed a functional PWA prototype focusing on mobile-first user experience.',
        'Used AI-assisted rapid prototyping workflows to efficiently translate product concepts into responsive interface structures.'
      ]
    },
    {
      title: 'MoFish Auctions — PWA Prototype',
      subtitle: 'Progressive Web App · Mobile UI · Functional Prototyping',
      prototypeLabel: 'Prototype',
      prototypeUrl: 'https://mofish-auctions.netlify.app/',
      prototypeDisplay: 'mofish-auctions.netlify.app',
      bullets: [
        'Created an interactive PWA prototype translating product requirements into a mobile-oriented interface.',
        'Developed functional interface flows to demonstrate product behavior beyond static UI screens.'
      ]
    }
  ],
  capabilitiesTitle: 'Product & Prototyping Capabilities',
  capabilitiesBullets: [
    'Translate business requirements and early product ideas into practical UI/UX solutions.',
    'Develop user flows, wireframes, responsive interfaces, and interactive prototypes.',
    'Prototype web applications, dashboards, mobile apps, and PWAs.',
    'Support early-stage product exploration with UI concepts and presentation materials when required.',
    'Work from initial requirements through functional prototype delivery and development handoff.'
  ],
  educationTitle: 'Education',
  educationDegree: 'Bachelor\'s Degree in Economics — Management',
  educationSchool: 'STIE Kesatuan Bogor · Indonesia'
};

export const resumeId: ResumeData = {
  lang: 'id',
  downloadPdf: 'Unduh PDF',
  name: 'IRWAN DHARMAWAN',
  headline: 'Senior UI/UX Designer | Rekayasa UI & Prototyping Cepat',
  locationInfo: 'Jakarta, Indonesia · Terbuka untuk Peluang Remote & Hybrid',
  professionalSummaryTitle: 'Ringkasan Profesional',
  professionalSummaryParagraphs: [
    'Profesional UI/UX Senior dengan lebih dari 15 tahun pengalaman langsung dalam menerjemahkan kebutuhan bisnis, alur kerja kompleks, dan ide produk menjadi antarmuka digital yang jelas dan prototipe yang fungsional.',
    'Memiliki keahlian kuat dalam UI/UX, HTML/CSS, implementasi antarmuka responsif, dan alur kerja desain-ke-pengembangan di berbagai platform enterprise, sistem CRM, dasbor, media, perbankan, aplikasi web, aplikasi seluler, dan Progressive Web Apps (PWA).',
    'Saat ini menggunakan alur kerja pengembangan berbantuan AI dan agen pengkodean (coding agents) untuk mempercepat prototyping sambil tetap fokus pada kegunaan, kualitas antarmuka, perilaku responsif, dan implementasi praktis.'
  ],
  coreExpertiseTitle: 'Keahlian Inti',
  coreExpertiseGroups: [
    { title: 'UI/UX & Desain Produk', items: 'Desain UI/UX · Desain Antarmuka · Desain Interaksi · Alur Pengguna (User Flows) · Wireframing · UI Responsif · Desain Dasbor · UI Enterprise · UI Aplikasi Seluler · Desain Antarmuka PWA · Design Systems · Prototyping Cepat' },
    { title: 'Rekayasa UI', items: 'HTML5 · CSS3 · Desain Web Responsif · Lintas Browser (Cross-Browser) UI · Desain-ke-Kode · Penataan Komponen UI · Prototyping Front-End · Serah Terima Desain-ke-Pengembangan (Handoff)' },
    { title: 'Prototyping Cepat & Berbantuan AI', items: 'Prototyping Aplikasi Web · Prototyping Aplikasi Seluler · Prototyping PWA · Prototipe Interaktif · Agen Pengkodean AI (AI Coding Agents) · Pengembangan Diarahkan Agen (Agent-Directed Development)' }
  ],
  toolsTitle: 'Peralatan & Teknologi Kerja',
  toolsPrimaryLabel: 'Peralatan Desain',
  toolsPrimaryItems: 'Figma · Adobe Photoshop · Adobe Illustrator',
  toolsWorkflowLabel: 'Alur Kerja Pengembangan',
  toolsWorkflowItems: 'Git · Cursor · Agen Pengkodean AI',
  toolsFamiliarityLabel: 'Pemahaman Kerja',
  toolsFamiliarityItems: 'React · Next.js · Tailwind CSS · JavaScript · Capacitor',
  experienceTitle: 'Pengalaman Profesional',
  experiences: [
    {
      title: 'UI/UX Engineer',
      company: 'Ivosights · Lepas (Freelance)',
      date: 'Agt 2025 – Agt 2026',
      location: 'Remote | Jakarta, Indonesia',
      bullets: [
        'Menerjemahkan kebutuhan enterprise yang kompleks menjadi prototipe antarmuka fungsional dan responsif menggunakan prototyping berbasis kode yang cepat.',
        'Mendesain antarmuka CRM padat data yang mencakup alur penjualan (sales pipelines), analitik konversi, pelacakan pendapatan, dan dasbor operasional.',
        'Mendesain antarmuka pusat komando (command-center) eksekutif yang menggabungkan pemantauan multi-saluran, analisis sentimen, visualisasi data, dan tampilan informasi terpusat.',
        'Menerapkan keahlian HTML/CSS yang kuat bersama dengan alur kerja pengembangan berbantuan AI untuk dengan cepat membangun dan melakukan iterasi prototipe berbasis peramban (browser).',
        'Menjembatani desain UI/UX dan implementasi praktis, meningkatkan komunikasi antara pemangku kepentingan (stakeholders), tim produk, dan pengembang dalam lingkungan kerja jarak jauh (remote).'
      ]
    },
    {
      title: 'Desainer UI/UX Independen & Prototyping Cepat',
      company: '',
      date: '2021 – Sekarang',
      location: 'Lepas (Freelance) / Proyek Bersamaan | Remote',
      bullets: [],
      subProjects: [
        {
          title: 'Wellnooz — Aplikasi Kebugaran (Wellness) Berbasis di UEA',
          bullets: [
            'Mendesain UI awal dan prototipe fungsional untuk aplikasi kebugaran berbasis di UEA yang saat ini sedang dalam tahap pengembangan.',
            'Memanfaatkan HTML/CSS sebagai kekuatan utama untuk membangun antarmuka yang responsif.',
            'Menggunakan React, Tailwind CSS, dan Capacitor melalui alur kerja prototyping berbantuan AI untuk mempercepat pengiriman.'
          ]
        },
        {
          title: 'Promedia — Ekosistem Media Digital',
          bullets: [
            'Mendesain solusi UI/UX untuk ekosistem media digital berskala besar yang mendukung lebih dari 1.000 penerbit independen.',
            'Mengembangkan pola UI yang dapat diskalakan dan struktur antarmuka yang dapat digunakan kembali untuk memastikan konsistensi di seluruh properti penerbitan.',
            'Memastikan implementasi desain-ke-pengembangan yang praktis untuk kelancaran serah terima (handoff) kepada tim rekayasa.'
          ]
        }
      ]
    },
    {
      title: 'Lead UI/UX Engineer',
      company: 'PT Aplika Media Nusantara',
      date: '2014 – Sekarang',
      location: 'PT Aplika Media Nusantara | Jakarta, Indonesia',
      note: 'Turut terlibat dalam operasional perusahaan dan manajemen bisnis sambil tetap menangani langsung pekerjaan produk digital dan antarmuka.',
      bullets: [],
      subProjects: [
        {
          title: 'Bank BSI / Bank Syariah Mandiri — Platform Digital B2B',
          bullets: [
            'Mendesain antarmuka untuk inisiatif B2B khusus termasuk platform Business Value Chain dan Go-UMKM.',
            'Menerjemahkan proses bisnis yang kompleks ke dalam antarmuka digital terstruktur untuk menyederhanakan interaksi bagi pengguna enterprise dan UKM.'
          ]
        },
        {
          title: 'Otojurnalisme.com — Platform Media Otomotif',
          bullets: [
            'Memimpin arsitektur UI/UX dan pengembangan antarmuka, menerjemahkan konsep produk menjadi pengalaman digital yang praktis.',
            'Mengembangkan pola antarmuka yang dapat digunakan kembali dan prototipe fungsional untuk memperjelas persyaratan sebelum pengembangan penuh dilakukan.'
          ]
        },
        {
          title: 'Pengalaman Digital Korporat (Federal Oil & Honda Community)',
          bullets: [
            'Mendesain antarmuka digital dan pengalaman terkait kampanye (campaign) sambil mempertahankan standar merek korporat dan konsistensi visual yang ketat.',
            'Bekerja secara langsung dengan pemangku kepentingan dan pengembang untuk memperjelas kebutuhan dan mengurangi ambiguitas selama proses serah terima (handoff).'
          ]
        }
      ]
    },
    {
      title: 'UI/UX & Front-End Designer',
      company: 'PT Digital Otomotifindo — Kompas Gramedia Group',
      date: '2011 – 2014',
      location: 'PT Digital Otomotifindo — Kompas Gramedia Group | Jakarta, Indonesia',
      bullets: [
        'Memelopori desain UI/UX dan implementasi praktis HTML/CSS untuk otomotifnet.com dan berbagai inisiatif digital otomotif lainnya.',
        'Mendesain dan mengimplementasikan situs mikro (microsites) kampanye dan pengalaman aktivasi digital.',
        'Berkolaborasi erat dengan tim redaksi, pemasaran, dan pengembangan untuk menghasilkan prototipe front-end fungsional bagi proyek internal dan klien.'
      ]
    },
    {
      title: 'UI/UX Designer & Front-End Prototyper',
      company: 'PT Agranet Multicitra Siberkom — detik.com',
      date: '2007 – 2011',
      location: 'PT Agranet Multicitra Siberkom — detik.com | Jakarta, Indonesia',
      bullets: [
        'Mendesain antarmuka pengguna dan prototipe fungsional HTML/CSS untuk produk digital internal dan situs mikro dengan lalu lintas (traffic) tinggi.',
        'Berkontribusi dalam transisi alur kerja desain dari mockup visual statis menuju prototipe berbasis peramban (browser) yang praktis.'
      ]
    }
  ],
  projectsTitle: 'Proyek Terpilih Saat Ini',
  projects: [
    {
      title: 'LSP IAI — Platform Sertifikasi Profesional',
      subtitle: 'Aplikasi Web · UI Alur Kerja · Dasbor · Prototyping Cepat | Sedang Berlangsung',
      prototypeLabel: 'Prototipe',
      prototypeUrl: 'https://staging-app.lsp-iai.id/',
      prototypeDisplay: 'staging-app.lsp-iai.id',
      bullets: [
        'Menerjemahkan kebutuhan operasional yang kompleks dan perjalanan pengguna multi-langkah menjadi prototipe fungsional berbasis peramban.',
        'Menyempurnakan UI aplikasi web responsif dan alur antarmuka melalui pengembangan iteratif untuk mendukung validasi dan serah terima (handoff).'
      ]
    },
    {
      title: 'InvestiHub — Prototipe Dasbor',
      subtitle: 'Aplikasi Web · UI Dasbor · Prototyping Cepat | Sedang Berlangsung',
      prototypeLabel: 'Prototipe',
      prototypeUrl: 'https://investihub.netlify.app/dashboard',
      prototypeDisplay: 'investihub.netlify.app/dashboard',
      bullets: [
        'Menerjemahkan alur kerja berorientasi data menjadi konsep UI dasbor terstruktur.',
        'Mengembangkan antarmuka responsif dan prototipe fungsional interaktif untuk evaluasi produk yang berkelanjutan.'
      ]
    },
    {
      title: 'Y-Warrior — Prototipe PWA',
      subtitle: 'Progressive Web App · UI Mengutamakan Seluler (Mobile-First) · Prototyping Fungsional',
      prototypeLabel: 'Prototipe',
      prototypeUrl: 'https://y-warior.netlify.app/',
      prototypeDisplay: 'y-warior.netlify.app',
      bullets: [
        'Mendesain dan mengembangkan prototipe PWA fungsional yang berfokus pada pengalaman pengguna mengutamakan seluler (mobile-first).',
        'Menggunakan alur kerja prototyping cepat berbantuan AI untuk menerjemahkan konsep produk secara efisien ke dalam struktur antarmuka responsif.'
      ]
    },
    {
      title: 'MoFish Auctions — Prototipe PWA',
      subtitle: 'Progressive Web App · UI Seluler · Prototyping Fungsional',
      prototypeLabel: 'Prototipe',
      prototypeUrl: 'https://mofish-auctions.netlify.app/',
      prototypeDisplay: 'mofish-auctions.netlify.app',
      bullets: [
        'Membuat prototipe PWA interaktif yang menerjemahkan kebutuhan produk ke dalam antarmuka berorientasi seluler.',
        'Mengembangkan alur antarmuka fungsional untuk mendemonstrasikan perilaku produk di luar tampilan UI statis.'
      ]
    }
  ],
  capabilitiesTitle: 'Kapabilitas Produk & Prototyping',
  capabilitiesBullets: [
    'Menerjemahkan kebutuhan bisnis dan ide produk awal menjadi solusi praktis UI/UX.',
    'Mengembangkan alur pengguna (user flows), wireframes, antarmuka responsif, dan prototipe interaktif.',
    'Membuat prototipe aplikasi web, dasbor, aplikasi seluler, dan PWA.',
    'Mendukung eksplorasi produk tahap awal dengan konsep UI dan materi presentasi bila diperlukan.',
    'Bekerja mulai dari kebutuhan awal hingga pengiriman prototipe fungsional dan serah terima (handoff) ke pengembangan.'
  ],
  educationTitle: 'Pendidikan',
  educationDegree: 'Sarjana Ekonomi (S1) — Manajemen',
  educationSchool: 'STIE Kesatuan Bogor · Indonesia'
};
