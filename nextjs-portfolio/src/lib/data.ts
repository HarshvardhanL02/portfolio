// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// ============================================================

export const siteConfig = {
  name: "Harshvardhan Lokhande",
  title: "Mechanical Engineering Student | Software Developer | Product & Technology",
  email: "harshvardhanlokhande36@gmail.com",
  phone: "9423113536",
  github: "https://github.com/HarshvardhanL02",
  linkedin: "https://linkedin.com/in/harshvardhan-lokhande",
  twinsparktech: "https://twinsparktech.online",
};

export const heroData = {
  tag: "MIT Academy of Engineering, Pune — B.E. Mechanical Engineering, 2025–2029",
  role: "Mechanical Engineering Student | Software Developer | Product & Technology",
  name: "Harshvardhan Lokhande",
  lede: "I work at the intersection of mechanical engineering, software development, and product management. From building student-focused web platforms and automated data pipelines to assembling electric vehicle prototypes and embedded systems — I enjoy combining engineering fundamentals with software and technology to build things that solve real problems.",
};

export const aboutData = {
  paragraphs: [
    "I'm a Mechanical Engineering student at MIT Academy of Engineering, Pune, with practical experience in software development, product management, internal tool development, automation, and engineering projects.",
    "What started as a personal project to help MHT-CET students find the right college grew into TwinSparkTech — a full ecosystem of prediction engines, data tools, and a counselling management platform. Along the way, I picked up an internship at Aditya Counselling, where I work on web products, internal tools, and the CounselDesk student management system.",
    "Outside of software, I work on mechanical engineering projects — from CAD modelling and workshop practice to assembling an electric tricycle prototype and building an Arduino-based air quality indicator. I care about shipping things that work, learning from working engineers, and going deeper on both engineering and software fundamentals.",
  ],
  languages: ["English (Professional)", "Hindi (Native)", "Marathi (Native)"],
};

export interface Experience {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  type: "work" | "project" | "education";
  current?: boolean;
}

export const experienceData: Experience[] = [
  {
    period: "Apr 2026 — Present",
    title: "Product & Management Intern",
    org: "Aditya Counselling Private Limited",
    location: "Pune, Maharashtra",
    description:
      "Developing and improving web-based products, internal tools, and student management systems while supporting product management activities.",
    responsibilities: [
      "Developing and improving web-based products and internal tools, working across frontend development, feature implementation, UI improvements, data handling, testing, and deployment.",
      "Building a dedicated student and mentor list-generation tool to streamline creation, organization, and management of student and mentor lists.",
      "Working on the CounselDesk student management platform, supporting student data management, counselling workflows, mentor-student coordination, and tracking.",
      "Contributing to the development and maintenance of the company's main website, implementing web pages, content updates, and feature improvements.",
      "Supporting product management activities including requirement understanding, feature planning, workflow design, testing, documentation, and coordination.",
    ],
    type: "work",
    current: true,
  },
  {
    period: "2025 — Present",
    title: "Independent Product Builder",
    org: "TwinSparkTech",
    location: "twinsparktech.online",
    description:
      "Designing, building, and maintaining the TwinSparkTech ecosystem — a student-focused MHT-CET digital platform with prediction engines, data tools, and counselling management systems.",
    type: "project",
    current: true,
  },
  {
    period: "2025 — 2029",
    title: "B.E. Mechanical Engineering",
    org: "MIT Academy of Engineering (MITAOE), Pune",
    location: "Affiliated to Savitribai Phule Pune University",
    description:
      "Pursuing mechanical engineering with coursework in engineering drawing, manufacturing processes, and workshop practice.",
    type: "education",
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  links: { label: string; url: string; disabled?: boolean }[];
  featured?: boolean;
  visual: "platform" | "code" | "crm" | "hardware" | "iot" | "ai";
}

export const projectsData: Project[] = [
  {
    id: "twinsparktech",
    title: "TwinSparkTech Platform",
    category: "Full-Stack Web Development",
    description:
      "A student-focused MHT-CET digital ecosystem that helps students predict colleges, analyze cutoffs, explore seat matrices, estimate ranks, and generate recommendations — with counselling tools for the mentors guiding them.",
    contribution:
      "Designed, developed, and deployed the entire platform independently. Built the frontend with HTML, CSS, and JavaScript, integrated Firebase for the backend, and handle everything from bug fixes to annual data updates.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Next.js",
      "Cloudflare Workers",
    ],
    links: [
      { label: "Live Site", url: "https://twinsparktech.online" },
      { label: "GitHub", url: "https://github.com/HarshvardhanL02" },
    ],
    featured: true,
    visual: "platform",
  },
  {
    id: "counseldesk",
    title: "CounselDesk CRM",
    category: "Student Management & Counselling Workflow",
    description:
      "A counselling management platform built for mentors and education consultants — the operational side of MHT-CET admissions, handling student data management, counselling workflows, mentor-student coordination, and tracking.",
    contribution:
      "Built the full CRM system with role-based dashboards covering the counselling workflow end-to-end, from lead tracking to booking management and recommendation generation.",
    technologies: [
      "Next.js",
      "Cloudflare D1",
      "Cloudflare R2",
      "Drizzle ORM",
      "Cloudflare Workers",
    ],
    links: [{ label: "Private Project", url: "#", disabled: true }],
    visual: "crm",
  },
  {
    id: "pdf-extraction",
    title: "Government PDF Data Extraction Tool",
    category: "Automation & Data Processing",
    description:
      "An automated pipeline that extracts irregular data tables from government MHT-CET counselling PDFs and transforms unstructured information into structured JSON and CSV datasets.",
    contribution:
      "Wrote Python and JavaScript extraction scripts, built the validation pipeline, and open-sourced the tool as CET Extractor. This tool powers the data layer behind all TwinSparkTech prediction tools.",
    technologies: [
      "Python",
      "JavaScript",
      "PDF Processing",
      "Data Validation",
      "JSON",
      "CSV",
    ],
    links: [
      {
        label: "View Code",
        url: "https://github.com/HarshvardhanL02/Twinsparktech.online/tree/main/CET_Extractor_2.0",
      },
    ],
    visual: "code",
  },
  {
    id: "electric-tricycle",
    title: "Electric Tricycle Project",
    category: "Creative Technology / Mechanical-Electrical Integration",
    description:
      "An academic team project involving the assembly and testing of a battery-powered electric tricycle, integrating mechanical and electrical components for a college-level creative technology project.",
    contribution:
      "Worked in a team to assemble and test the prototype. Helped with fitting and connecting components, checking wiring, running functional tests on the drivetrain and battery connections, and compiling project documentation.",
    technologies: [
      "Electromechanical Assembly",
      "Wiring & Testing",
      "Documentation",
      "Team Coordination",
    ],
    links: [],
    visual: "hardware",
  },
  {
    id: "air-quality",
    title: "Mini Air Quality Indicator",
    category: "Embedded Systems & IoT",
    description:
      "An Arduino-based environmental monitoring system using MQ-series gas sensors and an OLED display that reads sensor values, processes them into structured air-quality indicators, and triggers alerts.",
    contribution:
      "Built the complete system as a personal learning project. Wrote Arduino code to read analog sensor values, set threshold levels, trigger LED alerts, and display readings. Learned circuit connections, sensor wiring, and datasheet reading.",
    technologies: ["Arduino", "MQ Gas Sensors", "OLED Display", "C++"],
    links: [
      {
        label: "Documentation",
        url: "https://docs.google.com/document/d/1trOemhtMTBDQcVFakNvaIeFpyDrc54tOmVHbfbeluYA/edit?usp=sharing",
      },
    ],
    visual: "iot",
  },
  {
    id: "sih-disaster",
    title: "SIH 26177 — Edge-AI Disaster Search & Rescue",
    category: "Prototype / Research Project",
    description:
      "A Smart India Hackathon project exploring edge-AI based disaster search and rescue systems. The project involves research and prototype development for intelligent disaster response solutions.",
    contribution:
      "Contributing to prototype development and research. Note: This is an ongoing project — distinguishing between completed prototype work and planned future functionality.",
    technologies: [
      "Edge AI",
      "IoT",
      "Embedded Systems",
      "Research",
    ],
    links: [],
    visual: "ai",
  },
];

export const twinsparkModules = [
  {
    name: "College Predictor",
    description:
      "Admission-chance predictions from official CAP cutoff data, filterable by category, seat type, branch and college.",
    status: "Live",
    url: "https://predictor.twinsparktech.online/college-predictor",
  },
  {
    name: "College Insight",
    description:
      "Analytics dashboard for branch data, cutoff trends and college information.",
    status: "Live",
    url: "https://insight.twinsparktech.online",
  },
  {
    name: "Rank Predictor",
    description:
      "Predicts MHT-CET rank from percentile using historical official data.",
    status: "Built-in",
  },
  {
    name: "Percentile Predictor",
    description: "Estimates MHT-CET percentile from raw scores.",
    status: "Built-in",
  },
  {
    name: "Seat Matrix Explorer",
    description:
      "Interactive explorer for official seat matrix data by college, branch, category and seat type.",
    status: "Built-in",
  },
  {
    name: "CAP Round Intelligence",
    description:
      "Analyzes cutoff trends and admission probability across previous CAP rounds.",
    status: "Built-in",
  },
  {
    name: "Recommendation Generator",
    description:
      "Generates personalized college recommendation PDFs from prediction results.",
    status: "Built-in",
  },
  {
    name: "Gov. PDF Data Engine",
    description:
      "Extraction pipeline turning government PDFs into structured JSON for every tool in the ecosystem.",
    status: "Infrastructure",
  },
];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    label: "Programming & Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python (Basics)",
      "Firebase",
      "Next.js",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Cloudflare R2",
      "Drizzle ORM",
    ],
  },
  {
    label: "Product & Data",
    skills: [
      "Product Management",
      "Data Analysis",
      "Microsoft Excel",
      "JSON",
      "CSV",
      "Project Management",
      "Technical Documentation",
    ],
  },
  {
    label: "Mechanical Engineering",
    skills: [
      "Engineering Drawing",
      "Manufacturing Processes",
      "Workshop Practice",
      "Lathe Machine Operations",
    ],
  },
  {
    label: "CAD & Design",
    skills: ["AutoCAD", "Fusion 360", "Autodesk ReCap"],
  },
];

export const educationData = {
  degree: "B.E. Mechanical Engineering",
  institution: "MIT Academy of Engineering (MITAOE), Pune",
  affiliation: "Affiliated to Savitribai Phule Pune University",
  graduation: "Expected Graduation: May 2029",
  coursework: [
    "Engineering Drawing",
    "Manufacturing Processes",
    "Workshop Practice",
  ],
};

export const certificationsData = [
  "Cisco Python Essentials 1 & 2",
  "IBM Career Management Essentials",
  "Anthropic Claude 101",
  "AI Fluency Framework & Foundations (NASSCOM)",
  "NASSCOM Digital 101",
];

