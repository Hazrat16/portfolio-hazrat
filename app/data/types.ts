export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectLinks = {
  client?: string;
  server?: string;
  live?: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  links: ProjectLinks;
};

export type TechCardIconKey =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export type TechCard = {
  icon: TechCardIconKey;
  title: string;
  description: string;
  tags: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  action: string;
  external?: boolean;
  accent?: boolean;
};

export type NavLink = {
  href: string;
  label: string;
};
