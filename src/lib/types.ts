
export interface Skill {
  name: string;
  icon: string;
  level?: number;  // 1-10 scale
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  link: string;
  image: string;
}
