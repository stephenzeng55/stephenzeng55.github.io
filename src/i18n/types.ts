type Project = {
  name: string;
  type: string;
  description: string;
  period: string;
  location: string;
};

type Highlight = {
  title: string;
  description: string;
};

export type PortfolioContent = {
  lang: string;
  path: string;
  label: string;
  title: string;
  description: string;
  nav: {
    ariaLabel: string;
    homeLabel: string;
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    lede: string;
    actionsLabel: string;
    viewWork: string;
    getInTouch: string;
  };
  highlightsLabel: string;
  highlights: Highlight[];
  work: {
    eyebrow: string;
    title: string;
  };
  projects: Project[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    credentialsLabel: string;
  };
  skillsLabel: string;
  skills: string[];
  credentials: string[];
  contact: {
    eyebrow: string;
    title: string;
    email: string;
  };
};
