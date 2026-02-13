// Based on JSON Resume Schema (jsonresume.org)
export interface Resume {
  basics: Basics;
  work: Work[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  volunteer?: Volunteer[];
  languages?: Language[];
}

export interface Basics {
  name: string;
  label: string; // e.g., "Software Engineer"
  image?: string; // Profile photo URL
  email: string;
  phone?: string;
  url?: string; // Personal website
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  address?: string;
  postalCode?: string;
  city: string;
  countryCode: string;
  region?: string; // State/Province
}

export interface Profile {
  network: string; // e.g., "LinkedIn", "GitHub"
  username: string;
  url: string;
}

export interface Work {
  name: string; // Company name
  position: string;
  url?: string;
  startDate: string; // ISO 8601 format (YYYY-MM-DD)
  endDate?: string; // undefined for current position
  summary: string;
  highlights: string[];
  location?: string;
}

export interface Education {
  institution: string;
  url?: string;
  area: string; // Field of study
  studyType: string; // e.g., "Bachelor", "Master"
  startDate?: string;
  endDate?: string;
  score?: string; // GPA
  courses?: string[];
}

export interface Skill {
  name: string; // Skill category (e.g., "Frontend Development")
  level?: string; // e.g., "Expert", "Intermediate"
  keywords: string[]; // Technologies
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[]; // Technologies used
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string; // Organization
  type?: string; // e.g., "application", "website"
}

export interface Volunteer {
  organization: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
}

export interface Language {
  language: string;
  fluency: string; // e.g., "Native", "Fluent", "Professional"
}
