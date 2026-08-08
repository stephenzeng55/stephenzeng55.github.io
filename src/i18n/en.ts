import type { PortfolioContent } from "./types";

export const en: PortfolioContent = {
  lang: "en",
  path: "/",
  label: "English",
  title: "Stephen Zeng | Portfolio",
  description:
    "Stephen Zeng is a Washington, D.C.-based Senior .NET Software Developer with experience in C#, Vue.js, TypeScript, AWS, and Microsoft Azure.",
  nav: {
    ariaLabel: "Primary navigation",
    homeLabel: "Stephen Zeng home",
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  hero: {
    title: "Stephen Zeng builds cloud-ready software systems",
    lede: "Washington, D.C.-based Senior .NET Software Developer with experience in C#, Vue.js, TypeScript, JavaScript, AWS, Microsoft Azure, and custom web applications for enterprise and mission-driven teams.",
    actionsLabel: "Portfolio actions",
    viewWork: "View work",
    getInTouch: "Get in touch",
  },
  highlightsLabel: "Highlights",
  highlights: [
    {
      title: ".NET and cloud",
      description:
        "Experienced across .NET, C#, AWS, Microsoft Azure, and web platforms.",
    },
    {
      title: "Enterprise delivery",
      description:
        "Custom software, web portals, and cloud-hosted data processing solutions.",
    },
    {
      title: "Multilingual perspective",
      description:
        "Native or bilingual English and Cantonese, with professional working Japanese and Mandarin.",
    },
  ],
  work: {
    eyebrow: "Experience",
    title: "Software work across foundations, consulting, and technology.",
  },
  projects: [
    {
      name: "Michael & Susan Dell Foundation",
      type: "Senior .NET Software Developer",
      description:
        "Building software for a mission-driven foundation, with senior-level experience across .NET, cloud development, and modern web applications.",
      period: "September 2019 - Present",
      location: "Austin, TX",
    },
    {
      name: "Pariveda Solutions",
      type: "Associate",
      description:
        "Architected and developed custom software, web portals, and cloud-hosted data processing solutions for Fortune 500 companies.",
      period: "2014 - 2019",
      location: "Seattle",
    },
    {
      name: "Rauland-Borg",
      type: "Document Translator / Engineering Intern",
      description:
        "Researched healthcare technology, reviewed Japanese technical documents with engineers, and translated technical patents into English.",
      period: "2013",
      location: "Chicago area",
    },
  ],
  about: {
    eyebrow: "About",
    title:
      "I bring software architecture, product delivery, and cloud experience together.",
    body: "My background spans information technology, software development, and cloud-hosted systems. I have a Master's Degree in Computer Science from Northwestern University and a track record of building custom applications, web portals, and data processing solutions.",
    credentialsLabel: "Education and certifications",
  },
  skillsLabel: "Skills",
  skills: [
    "C#",
    ".NET Core",
    ".NET Framework",
    "Vue.js",
    "TypeScript / JavaScript",
    "AWS",
    "Microsoft Azure",
    "Cloud development",
    "Japanese",
    "Cantonese Chinese",
    "Mandarin Chinese",
  ],
  credentials: [
    "Master's Degree in Computer Science, Northwestern University",
    "B.S. in Computer Engineering, Northwestern University",
    "Microsoft Certified: Azure Fundamentals",
    "Certified ScrumMaster (CSM)",
  ],
  contact: {
    eyebrow: "Contact",
    title: "Have a project, role, or collaboration in mind?",
    email: "Email",
  },
};
